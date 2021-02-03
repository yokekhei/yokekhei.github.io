import { setPage, filter } from './portfolio.util';

const onKeywordSelected = (event: any) => {
    const monthElement: HTMLSelectElement = document.getElementById('month') as HTMLSelectElement;
    const month: number = monthElement.value && monthElement.value.length > 0 ? +monthElement.value : -1;

    const yearElement: HTMLSelectElement = document.getElementById('year') as HTMLSelectElement;
    const year: number = yearElement.value && yearElement.value.length > 0 ? +yearElement.value : -1;

    filter(event.target.value, month, year);
}

const onMonthSelected = (event: any) => {
    const keywordElement: HTMLSelectElement = document.getElementById('keyword') as HTMLSelectElement;
    const keyword: string = keywordElement.value;

    const month = event.target.value && event.target.value.length > 0 ? +event.target.value : -1;

    const yearElement: HTMLSelectElement = document.getElementById('year') as HTMLSelectElement;
    const year: number = yearElement.value && yearElement.value.length > 0 ? +yearElement.value : -1;

    filter(keyword, month, year);
}

const onYearSelected = (event: any) => {
    const keywordElement: HTMLSelectElement = document.getElementById('keyword') as HTMLSelectElement;
    const keyword: string = keywordElement.value;

    const monthElement: HTMLSelectElement = document.getElementById('month') as HTMLSelectElement;
    const month: number = monthElement.value && monthElement.value.length > 0 ? +monthElement.value : -1;

    const year = event.target.value && event.target.value.length > 0 ? +event.target.value : -1;

    filter(keyword, month, year);
}

/* main entry */
setPage(1);

document.getElementById('keyword')!.addEventListener('change', (event) => onKeywordSelected(event));
document.getElementById('month')!.addEventListener('change', (event) => onMonthSelected(event));
document.getElementById('year')!.addEventListener('change', (event) => onYearSelected(event));
