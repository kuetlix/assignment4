const taskManager=new TaskManager();
const [loadTasksBtn,statusMsg,taskList]=['loadTasksBtn','statusMessage','taskList'].map(id=>document.getElementById(id));

const renderTasks=()=>{
    taskList.innerHTML='';
    taskManager.tasks.forEach(task=>{
        const div=document.createElement('div');
        div.className=`task ${task.completed?'completed':''}`;
        
        const span=document.createElement('span');
        span.textContent=task.title;

        const createBtn=(text,className,action)=>{
            const btn=document.createElement('button');
            btn.className=className;
            btn.textContent=text;
            btn.addEventListener('click',()=>{action();renderTasks();});
            return btn;
        };

        const toggleBtn=createBtn('Toggle','toggle-btn',()=>taskManager.toggleTask(task.id));
        const deleteBtn=createBtn('Delete','delete-btn',()=>taskManager.removeTask(task.id));

        div.append(span,toggleBtn,deleteBtn);
        taskList.appendChild(div);
    });
};

loadTasksBtn.addEventListener('click',async()=>{
    try{
        statusMsg.textContent='Loading tasks...';
        const tasksData=JSON.parse(JSON.stringify(await fetchTasks()));
        taskManager.setTasks(tasksData.map(t=>new Task(t.id,t.title,t.completed)));
        renderTasks();
        statusMsg.textContent='';
    }catch(error){
        statusMsg.textContent='Error fetching tasks.';
    }
});