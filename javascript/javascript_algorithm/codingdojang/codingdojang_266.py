 #encoding=utf-8
#python3.5



def Spiral(x,y):
	result = [[None for i in range(x)] for j in range(y)]
	count = 1
	x_step, y_step = 0,0
	x_count, y_count = 0,0
	maxCount = x * y

	#x+ 방향으로 움직임
	for i in range(x-x_count):
		if(maxCount <= count):
			break;
		result[y_step][i] = count
		print("result[{}][{}]".format(y_step,i),result[y_step][i])
		count = count + 1
		x_step = i
	x_count = x_count + 1

	#y+ 방향으로 움직임
	for j in range(y - y_step):
		if(maxCount <= count):
			break;
		result[j][x_step] = count
		print("result[{}][{}]".format(j,x_step),result[j][x_step])
		count = count + 1
		y_step = i
	y_count = y_count + 1	
	print("테스트")
	#x- 방향으로 움직임
	for i in range(x-x_count,0):
		
		if(maxCount <= count):
			break;
		result[y_step][i] = count
		print("result[{}][{}]".format(y_step,i),result[y_step][i])
		count = count + 1
		x_step = i
	x_count = x_count + 1

	#y- 방향으로 움직임
	for j in range(y - y_step,0):
		if(maxCount <= count):
			break;
		result[j][x_step] = count
		print("result[{}][{}]".format(j,x_step),result[j][x_step])
		count = count + 1
		y_step = i
	y_count = y_count + 1	

	for i in range(y):
		for j in range(x):
			print(result[j][i],)
		print('')


#Spiral(1,1)
#Spiral(2,2)
#Spiral(3,3)
#Spiral(4,4)
Spiral(5,5)