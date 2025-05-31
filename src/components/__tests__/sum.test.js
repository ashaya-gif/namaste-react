import { sum } from "../sum";


test("Sum function should calculate the sum of two numbers", () =>{
    const result = sum(3,4);
    //the below line is known as assertion- assertion means below expect statement we are expecting something
    expect(result).toBe(7);

});