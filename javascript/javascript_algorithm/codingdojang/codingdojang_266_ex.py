input = raw_input().split(" ")
print input

xInput = int(input[0])
yInput = int(input[1])

xStep, yStep = xInput, yInput
max = xInput * yInput

x, y = 0, -1

p = [0, 1]

matrix = [[0]*yInput for i in xrange(xInput)]

value = 0
isGoing = 1

while(isGoing):

    for i in xrange(1, yStep + 1):

        x += p[0]
        y += p[1]
        matrix[x][y] = value
        value += 1

        if value >= max:
            isGoing = 0
            break

    for i in xrange(1, xStep):

        x += p[1]
        y += p[0]
        matrix[x][y] = value
        value += 1      

        if value >= max:
            isGoing = 0
            break

    xStep -= 1
    yStep -= 1
    p[1] *= -1

for i in xrange(0, xInput):

    for j in xrange(0, yInput):

        print("%5d" % matrix[i][j]),

    print ""