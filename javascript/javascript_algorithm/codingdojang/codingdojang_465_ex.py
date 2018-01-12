def stringCompress_rec(string):
    ans = ''
    count = 1
    string = string+'\0'
    for i in range(1, len(string)):
        if string[i - 1] == string[i]:
            count += 1
        else:
            ans += string[i - 1] + str(count) + stringCompress_rec(string[i:])
            break
    return ans


#print(stringCompress_rec('aaaaassss'))

s = 'aabbbbcccassssa'
result = s[0]		
print(result[-1])