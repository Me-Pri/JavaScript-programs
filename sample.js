function interviewQuestion (job)
{
    if (job === 'engineer')
        {
            return function (name)
            {
                console.log(name + ', why do you want to work with our company ?')
            }
        }
    else if (job === 'teacher')
        {
            return function (name)
            {
                console.log('Which subject do you teach' + name + ' ?');
            }
        }
    else
        {
            return function (name)
            {
                console.log(name + ', what do you do?');
            }
        }
}
interviewQuestion('engineer')('Alice');



