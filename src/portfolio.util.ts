import { Pager } from './pager';
import { PagerService } from './pager.service';
import Portfolio from './portfolio';
import { portfolios } from './portfolio.list';

const pagerService: PagerService = new PagerService();
let pager: Pager;
let pageDisplayItems: Portfolio[];

function getMonth(index: number) {
    let month = '';

    switch (index) {
        case 0:
            month = 'Jan';
            break;
        case 1:
            month = 'Feb';
            break;
        case 2:
            month = 'Mar';
            break;
        case 3:
            month = 'Apr';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'Jun';
            break;
        case 6:
            month = 'Jul';
            break;
        case 7:
            month = 'Aug';
            break;
        case 8:
            month = 'Sep';
            break;
        case 9:
            month = 'Oct';
            break;
        case 10:
            month = 'Nov';
            break;
        case 11:
            month = 'Dec';
            break;
        default:
            console.log('Invalid month index');
    }

    return month;
}

function displayKeywords(pf: Portfolio) {
    let content = '';

    pf.keywords.forEach(keyword => {
        content += `<span class="tabbed"><i class="fa fa-circle"></i>&nbsp;${keyword}</span>`
    });

    return content;
}

function displayCards(pfs: Portfolio[]) {
    const container = document.getElementById('card-container');

    if (container === undefined || container === null) { return; }

    container.innerHTML = '';

    pfs.forEach(pf => {
        const content = `
            <div class="row card bg-light mb-3">
                <div class="card-body">
                    <h5 class="card-title">${pf.name}</h5>
                    <p class="card-text">${pf.desc}</p>
                    <div class="row small">
                        <div class="col-md-8">
                            <p class="mb-0">${displayKeywords(pf)}</p>
                        </div>
                        <div class="col-md-2">
                            <p class="mb-0">
                                <a href="${pf.repository}" target="_blank">
                                    <i class="${pf.demo ? "fa fa-link" : "fa fa-github"}"></i>&nbsp;${pf.demo ? "demo" : "repository"}
                                </a>
                            </p>
                        </div>
                        <div class="col-md-2">
                            <p class="mb-0">${getMonth(pf.monthCreated)}&nbsp;${pf.yearCreated}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML += content;
    });
}

function printPageItems(_pager: Pager): string {
    let content = '';

    _pager.pages.forEach(page => {
        content += `
            <li id="page-${page}" class="page-item ${_pager.currentPage === page ? "active" : ""}">
                <a class="page-link">${page}</a>
            </li>
        `;
    });

    return content;
}

function displayPager(_pager: Pager) {
    const pagerContainer = document.getElementById('pager');

    if (pagerContainer === undefined || pagerContainer === null) { return; }

    pagerContainer.innerHTML = '';

    if (_pager.pages && _pager.pages.length) {
        pagerContainer.innerHTML += `
            <ul class="pagination mt-2 mb-4">
                <li class="page-item ${_pager.currentPage === 1 ? "disabled" : ""}">
                    <a class="page-link">&lt;&lt;</a>
                </li>
                <li class="page-item ${_pager.currentPage === 1 ? "disabled" : ""}">
                    <a class="page-link">&lt;</a>
                </li>
                ${printPageItems(_pager)}
                <li class="page-item ${_pager.currentPage === _pager.totalPages ? "disabled" : ""}">
                    <a class="page-link">&gt;</a>
                </li>
                <li class="page-item ${_pager.currentPage === _pager.totalPages ? "disabled" : ""}">
                    <a class="page-link">&gt;&gt;</a>
                </li>
            </ul>
        `;
    }
}

function addPagerListener(): void {
    const pageItems = document.getElementsByClassName('page-item') as HTMLCollectionOf<Element>;
    for (const element of pageItems) {
        element.addEventListener('click', (event: any) => {
            if (event.target.className !== 'page-link') { return; }

            switch (event.target.innerText) {
                case '<<': // First
                    setPage(1, pageDisplayItems);
                    break;
                case '<': // Previous
                    setPage(pager.currentPage - 1, pageDisplayItems);
                    break;
                case '>': // Next
                    setPage(pager.currentPage + 1, pageDisplayItems);
                    break;
                case '>>': // Last
                    setPage(pager.totalPages, pageDisplayItems);
                    break;
                default:
                    setPage(+event.target.innerText, pageDisplayItems);
            }
        });
    }
}

function setPage(page: number, pfs: Portfolio[] = portfolios) {
    pfs.sort(compare).reverse();
    pageDisplayItems = pfs;

    // get pager object from service
    pager = pagerService.getPager(pfs.length, page, 2);

    // get current page of items
    const pageItems = pfs.slice(pager.startIndex, pager.endIndex + 1);

    displayPager(pager);
    displayCards(pageItems);
    addPagerListener();
}

function compare(a: Portfolio, b: Portfolio) {
    const monthA = ('0' + a.monthCreated).slice(-2);
    const monthB = ('0' + b.monthCreated).slice(-2);
    const dateA = a.yearCreated + monthA;
    const dateB = b.yearCreated + monthB;

    if (dateA < dateB) {
        return -1;
    }

    if (dateA > dateB) {
        return 1;
    }

    return 0;
}

function filter(keyword: string, month: number, year: number) {
    let pfs = portfolios;

    if (keyword && keyword.length > 0) {
        pfs = pfs.filter(pf => pf.keywords.includes(keyword));
    }

    if (month > -1) {
        pfs = pfs.filter(pf => pf.monthCreated === month);
    }

    if (year > -1) {
        pfs = pfs.filter(pf => pf.yearCreated === year);
    }

    setPage(1, pfs);
}

export { setPage, filter };