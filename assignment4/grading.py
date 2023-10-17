# a python grading system for four subjects, returns -1 if invalid marks are entered

user_math = input("Enter marks for math: ")
user_physics = input("Enter marks for physics: ")
user_geography = input("Ënter marks for geography: ")
user_chemistry = input("Enter marks for chemistry: ")


math = int(user_math)
physics = int(user_physics)
geography = int(user_geography)
chemistry = int(user_chemistry)
grade = -1
average = -1

# check whether the marks for math, physics, geography and chemistry are in the required range
if math >= 0 and math <= 100 and physics >= 0 and physics <= 100 and geography >= 0 and geography <= 100 and chemistry >= 0 and chemistry <= 100:
    # calculate the average to be sued for grading
    average = (math + physics + geography + chemistry) / 4

    # assign grades based on the average
    if average >= 0 and average <= 30:
        grade = "D"
    elif average >= 31 and average <= 50:
        grade = "C"
    elif average >= 51 and average <= 70:
        grade = "B"
    elif average >= 71 and average <= 100:
        grade = "A"
else:
    # if the marks are not in the required range, print an error message
    print("Invalid marks entered")

# print the grade
print(f"Grade: {grade}, average: {average}")
