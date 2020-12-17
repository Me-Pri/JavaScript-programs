function interviewQuestion (job)
{
    if (job === 'designer')
        {
            return function (name) // anonymous function
            {
               console.log(name + ' , what is UxX designing ? '); 
            }
        }
    else if (job === 'teacher')
        {
            return function (name)
            {
                console.log('Which subject do you teach ' + name + ' ?');
            }
        }
    else 
        {
            return function (name)
            {
                console.log(name + " what to you do ? ")
            }
        }
}
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Mark');
interviewQuestion('designer')('Sam');
