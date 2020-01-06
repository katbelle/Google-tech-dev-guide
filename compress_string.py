my_str = '10[a]2[z]c'


def compress_str(my_str):

    multiplier = ""
    i = 0
    str_to_be_multiplied = ""
    final_str = ""
    list_of_nums = ['0','1', '2', '3', '4', '5', '6', '7', '8','9']


    for letter in my_str:
        
        if letter in list_of_nums: 
            multiplier += letter

        elif letter == '[':
            pass

        elif letter not in list_of_nums and letter != ']':
            if my_str[i - 1] == ']':
                final_str += letter
            else:
                str_to_be_multiplied += letter
    

        elif letter == ']':
            answer = str_to_be_multiplied * int(multiplier)
            final_str += answer
            multiplier = ""
            str_to_be_multiplied = ""

        else: 
            final_str += letter

        i += 1
    print(final_str)

if __name__ == '__main__':
        compress_str(my_str)
    