export class BubbleSort {
    static list: number[] = [2,3,2,5,6,1,-2,3,14,12];
    static bubbleSort(list: number[]) {
        let needNextPass: boolean = true;
        for (let i = 0; i < list.length && needNextPass; i++) {
            needNextPass = false;
            for (let j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    let temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                    needNextPass = true;
                }
            }
        }
    }
}