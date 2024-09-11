let haystack: number[] = [1,2,3,4,5,6,7];

let needle: number = 10;

export default function linear_search(haystack: number[], needle: number): boolean{
    for (let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle){
            return true;
        }
    }
    return false;
}