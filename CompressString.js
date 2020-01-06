const my_str = '3[abc]4[a]c';

// define function here
const compress_str = (str_val) => {
    let multiplier = "";
    let str_to_be_multiplied = "";
    let final_str = "";
    const list_of_nums = ['0','1', '2', '3', '4', '5', '6', '7', '8','9'];

    for (let i = 0; i < str_val.length; i++) {
        let letter = str_val[i];
        if (list_of_nums.includes(letter)) {
            multiplier += letter; 
        } else if (letter === '[') {
            pass;
        } else if (!(list_of_nums.includes(letter)) && letter != ']') {
            if (my_str[i-1] === ']') {
                final_str += letter;
            }
            else {
                str_to_be_multiplied += letter;
            }
        } else if (letter === ']') {
            let answer = str_to_be_multiplied * parseInt(multiplier);
            final_str += answer;
            multiplier = "";
            str_to_be_multiplied = "";
        }


};

// logs final answer
console.log(compress_str(my_str));