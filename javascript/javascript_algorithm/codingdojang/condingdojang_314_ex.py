#encoding=utf-8
#python3.5
#codingdojang314

'''
def lcd_disp(size, num_str):
    #  -   0
    # | | 1 2
    #  _   3
    # | | 4 5
    #  _   6
    _map = [
        '1011010111',
        '1000111111',
        '1111100111',
        '0011111011',
        '1010001010',
        '1101111111',
        '1011011010'
    ]
    def _horizon(key):
        prt = [' ', '-']
        for x in num_str:
            print (' {} '.format(prt[int(_map[key][int(x)])] * size), )
        print('')
    def _vertical(key1, key2):
        prt = [' ', '|']        
        for i in range(size):
            for x in num_str: 
                print ('{}{}{}'.format(prt[int(_map[key1][int(x)])]
                                       ,' ' * size
                                       ,prt[int(_map[key2][int(x)])]),
                       )
            print('')

    _horizon(0)
    _vertical(1, 2)
    _horizon(3)
    _vertical(4, 5)
    _horizon(6)

lcd_disp(2, '12345')
lcd_disp(3, '67890')

    #  -   0
    # | | 1 2
    #  _   3
    # | | 4 5
    #  _   6
'''#디지털0123456
tbl = ('1110111', #숫자0
       '0010010', #숫자1
       '1011101', #숫자2
       '1011011', #숫자3
       '0111010', #숫자4
       '1101011', #숫자5
       '1101111', #숫자6
       '1010010', #숫자7
       '1111111', #숫자8
       '1111011');#숫자9

def digitToStringLine(altitude, digit, s):

    t = tbl[int(digit)]
    F = lambda i : t[i] == '1'

    if 0 == altitude:
        return F(0) and (' ' + '-'*s + ' ') or (' '*(s+2))
    if altitude <= (s):
        return (F(1) and '|' or ' ') + ' '*s + (F(2) and '|' or ' ')
    if altitude == (1+s):
        return F(3) and (' ' + '-'*s + ' ') or (' '*(s+2))
    if altitude <= (1+s*2):
        return (F(4) and '|' or ' ') + ' '*s + (F(5) and '|' or ' ')
    return F(6) and (' ' + '-'*s + ' ') or (' '*(s+2))


def numToStringLine(altitude, snum, s):
    l = [digitToStringLine(altitude, c, s) for c in snum]
    return ' '.join(l)

def LCD(s, num):
    snum = str(num)
    l = [numToStringLine(i,snum,s) for i in range(3+s*2)]
    return '\n'.join(l)


def display(lines):
    lines = lines.strip().split('\n')
    for l in lines:
        l = l.split()
        s = int(l[0])
        n = int(l[1])
        if s == 0:
            print('good bye')
            break;
        print(LCD(s,n))

l = '''
2 12345
3 67890
0 0
'''

display(l)
'''
'''
'''
p=1
while p:
 p,q=raw_input().split();p=int(p)
 if p:
  for x in[28728]+[609961108]*p+[14680127]+[340862356]*p+[14708792,-1]:
   print' '.join(d[0]+d[1]*p+d[2]for d in[' -  | |   '[x>>int(j)*3&7:]for j in q])
'''
