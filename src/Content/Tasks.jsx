export default function Tasks({tasks}){
    const classNameTasksItemsContainer = "flex justify-between pt-3 pb-3";
    const classNameTasksItems = "ml-3 text-stone-800 font-medium text-center";
    const classNameTasksClearButton = "ml-3 text-stone-800 font-medium text-center";



    return (
        <>
            {tasks.map((task,key)=>(
                <div key={key} className={classNameTasksItemsContainer}>
                    <h3 className={classNameTasksItems}>{task}</h3>
                    <button className={classNameTasksClearButton}>Clear</button>
                </div>
            ))}
        </>

    );
}