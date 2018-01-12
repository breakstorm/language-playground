#encoding=utf-8
#python3.5
#codingdojang465

a = "aaaaabbbb"

result = a[0]
press_count = 0

for i in range(0, len(a)):
	if result[-1] == a[i]:
		press_count += 1
	else:
		result = result + str(press_count) + a[i]
		press_count = 1

result = result + str(press_count)
print(result)
