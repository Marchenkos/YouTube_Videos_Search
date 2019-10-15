class Task {
    constructor(type, shortDescription, fullDescription) {
        this.type = type;
        this.shortDescription = shortDescription;
        this.fullDescription = fullDescription;
        this.isComplete = false;
    }

    completeTask() {
        this.isComplete = true;
    }

    show() {
        console.log(`
        Type: ${this.type}
        Short description: ${this.shortDescription}
        Full description: ${this.fullDescription}
        State: ${this._getState()}`);
    }

    _getState() {
        return this.isComplete ? "complete" : "not complete";
    }
}

class SingleTask extends Task {
    constructor(shortDescription, fullDescription, deadline) {
        super("single task", shortDescription, fullDescription);
        this.deadline = deadline;
    }

    show() {
        console.log(`
        Type: ${this.type}
        Short description: ${this.shortDescription}
        Full description: ${this.fullDescription}
        State: ${this._getState()}
        Deadline: ${this.deadline}`);
    }
}

class GroupTask extends Task {
    constructor(shortDescription, fullDescription, team) {
        super("group task", shortDescription, fullDescription);
        this.team = team;
    }

    addTeamMember(teamMember) {
        this.team.push(teamMember);
    }

    removeTeamMember(teamMember) {
        if (this.team.indexOf(teamMember) > -1) {
            this.team.splice(this.team.indexOf(teamMember), 1);
        }
    }

    show() {
        console.log(`
        Type: ${this.type}
        Short description: ${this.shortDescription}
        Full description: ${this.fullDescription}
        State: ${this._getState()}
        Team: ${this.team}`);
    }
}

class TaskList {
    constructor(list) {
        this.list = list;
    }

    addTask(task) {
        this.list.push(task);
    }

    removeTask(task) {
        if (this.list.indexOf(task) > -1) {
            this.list.splice(this.list.indexOf(task), 1);
        }
    }

    show() {
        this.list.forEach((task) => task.show());
    }

    showCompletedTasks() {
        this.list.forEach((task) => {
            if (task.isComplete) {
                task.show();
            }
        });
    }

    showIncompletedTasks() {
        this.list.forEach((task) => {
            if (!task.isComplete) {
                task.show();
            }
        });
    }
}

const task1 = new GroupTask("Create a new project", "A lot of information about this project", ["Mike", "Anna", "Diana"]);
task1.show();
const task2 = new GroupTask("Buy a cat", "Buy a cat with Miya and Vlad", ["Miya", "Vlad"]);
const task3 = new SingleTask("Finish task", "ffldlfd", "today");
const task4 = new SingleTask("Buy a new car", "Buy a new car after next week", "week");
const list = new TaskList([task1, task2, task3]);
list.show();
list.addTask(task4);
list.show();
list.removeTask(task3);
list.show();
task4.completeTask();
list.showCompletedTasks();
task2.addTeamMember("Diana");
task1.removeTeamMember("Diana");
list.showIncompletedTasks();
