#encoding=utf-8
#python3.5
#codingdojang314

#파이썬에서 공백을 기준으로 입력값을 구분하는 방법 필요
size,count = input()
strCount = str(count)

for num in strCount:
	print(num)
	if int(num) == 1:
		for i in range(1,3):
			print("")
			for j in range(1,size+1):
				print("{0:^{1}}".format('|',size+1))
		print("{0:^{1}}".format('',size+1))

	elif int(num) == 2:
		for i in range(1,3):
			print("-"*size)
			for j in range(1,size+1):
				if i == 1:
					print("{0:>{1}}".format('|',size+1))
				else:
					print("{0:<{1}}".format('|',size+1))
		print("-"*size)
		
	elif int(num) == 3:
		for i in range(1,3):
			print("-"*size)
			for j in range(1,size+1):
				print("{0:>{1}}".format('|',size+1))
		print("-"*size)

	elif int(num) == 4:
		for i in range(1,3):
			if i == 1:
				for j in range(1,size+1):
					print("{0:<{1}}".format('|',size+1)+'|')
			if i == 2:
				print("-"*size)
				for j in range(1,size+1):
					print("{0:>{1}}".format('|',size+1))

	elif int(num) == 5:
		for i in range(1,3):
			print("-"*size)
			for j in range(1,size+1):
				if i == 1:
					print("{0:<{1}}".format('|',size+1))
				else:
					print("{0:>{1}}".format('|',size+1))
		print("-"*size)

	elif int(num) == 6:
		for i in range(1,3):
			print("-"*size)
			for j in range(1,size+1):
				if i == 1:
					print("{0:<{1}}".format('|',size+1))
				else:
					print("|"+"{0:>{1}}".format('|',size+1))
		print("-"*size)

	elif int(num) == 7:
		for i in range(1,3):
			if i == 1:
				print("-"*size)
			else:
				print("")
			for j in range(1,size+1):
				print("{0:>{1}}".format('|',size+1))
		print("{0:>{1}}".format('',size+1))

	elif int(num) == 8:
		for i in range(1,3):
			print("-"*size)
			for j in range(1,size+1):
				if i == 1:
					print("|"+"{0:>{1}}".format('|',size+1))
				else:
					print("|"+"{0:>{1}}".format('|',size+1))
		print("-"*size)

	elif int(num) == 9:
		for i in range(1,3):
			print("-"*size)
			for j in range(1,size+1):
				if i == 1:
					print("|"+"{0:>{1}}".format('|',size+1))

				else:
					print("{0:>{1}}".format('|',size+1))
		print("-"*size)

	elif int(num) == 0:	
		for i in range(1,3):
			if i == 2:
				print("")
			else:
				print("-"*size)
			for j in range(1,size+1):
				if i == 1:
					print("|"+"{0:>{1}}".format('|',size+1))
				else:
					print("|"+"{0:>{1}}".format('|',size+1))
		print("-"*size)

	elif num == 0 and size == 0:
		print("this is END")


