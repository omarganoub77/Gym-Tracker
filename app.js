const defaultWorkouts = {
    upper1: {
        id: 'upper1',
        name: 'Upper 1',
        subtitle: 'Strength Focus',
        color: 'bg-red-500',
        exercises: [
            { id: 'u1e1', name: 'Dumbbell Bench Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Chest' },
            { id: 'u1e2', name: 'Cable/Machine Row', sets: 4, reps: '6-8', rest: 180, muscle: 'Back' },
            { id: 'u1e3', name: 'Overhead Press', sets: 3, reps: '8-10', rest: 120, muscle: 'Shoulders' },
            { id: 'u1e4', name: 'Pull-ups/Lat Pulldown', sets: 3, reps: '8-10', rest: 120, muscle: 'Back' },
            { id: 'u1e5', name: 'Dumbbell Curl', sets: 3, reps: '10-12', rest: 90, muscle: 'Biceps' },
            { id: 'u1e6', name: 'Preacher Curl', sets: 3, reps: '10-12', rest: 90, muscle: 'Biceps' },
            { id: 'u1e7', name: 'Tricep Dips', sets: 3, reps: '10-12', rest: 90, muscle: 'Triceps' },
            { id: 'u1e8', name: 'Face Pulls', sets: 3, reps: '15-20', rest: 60, muscle: 'Rear Delts' }
        ]
    },
    lower1: {
        id: 'lower1',
        name: 'Lower 1',
        subtitle: 'Strength Focus',
        color: 'bg-blue-500',
        exercises: [
            { id: 'l1e1', name: 'Belt Squat', sets: 4, reps: '6-8', rest: 180, muscle: 'Quads' },
            { id: 'l1e2', name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: 180, muscle: 'Hamstrings' },
            { id: 'l1e3', name: 'Leg Press', sets: 3, reps: '10-12', rest: 120, muscle: 'Quads' },
            { id: 'l1e4', name: 'Leg Curl', sets: 3, reps: '10-12', rest: 90, muscle: 'Hamstrings' },
            { id: 'l1e5', name: 'Walking Lunges', sets: 3, reps: '12 each', rest: 90, muscle: 'Quads/Glutes' },
            { id: 'l1e6', name: 'Standing Calf Raise', sets: 4, reps: '12-15', rest: 60, muscle: 'Calves' },
            { id: 'l1e7', name: 'Plank', sets: 3, reps: '60s', rest: 60, muscle: 'Core' }
        ]
    },
    plyo: {
        id: 'plyo',
        name: 'Plyo/Power',
        subtitle: 'Conditioning',
        color: 'bg-purple-500',
        exercises: [
            { id: 'p1', name: 'Box Jumps', sets: 4, reps: '8', rest: 120, muscle: 'Power' },
            { id: 'p2', name: 'Plyometric Push-ups', sets: 3, reps: '10', rest: 90, muscle: 'Upper Power' },
            { id: 'p3', name: 'Lateral Jumps', sets: 3, reps: '10 each', rest: 90, muscle: 'Power' },
            { id: 'p4', name: 'Burpees', sets: 4, reps: '15', rest: 90, muscle: 'Conditioning' },
            { id: 'p5', name: 'Ladder Drills (High Knees)', sets: 4, reps: '20 yards', rest: 60, muscle: 'Agility' },
            { id: 'p6', name: 'Ladder Drills (In-Out)', sets: 4, reps: '20 yards', rest: 60, muscle: 'Agility' },
            { id: 'p7', name: 'Broad Jumps', sets: 3, reps: '8', rest: 120, muscle: 'Power' },
            { id: 'p8', name: 'Medicine Ball Slams', sets: 3, reps: '12', rest: 60, muscle: 'Power' },
            { id: 'p9', name: 'Sprint Intervals', sets: 6, reps: '50m', rest: 180, muscle: 'Speed' },
            { id: 'p10', name: 'Jump Rope', sets: 3, reps: '60s', rest: 60, muscle: 'Conditioning' }
        ]
    },
    upper2: {
        id: 'upper2',
        name: 'Upper 2',
        subtitle: 'Hypertrophy Focus',
        color: 'bg-orange-500',
        exercises: [
            { id: 'u2e1', name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', rest: 120, muscle: 'Chest' },
            { id: 'u2e2', name: 'Cable Row', sets: 4, reps: '10-12', rest: 120, muscle: 'Back' },
            { id: 'u2e3', name: 'Dumbbell Shoulder Press', sets: 3, reps: '10-12', rest: 90, muscle: 'Shoulders' },
            { id: 'u2e4', name: 'Lat Pulldown (Wide)', sets: 3, reps: '12-15', rest: 90, muscle: 'Back' },
            { id: 'u2e5', name: 'Cable Flyes', sets: 3, reps: '12-15', rest: 60, muscle: 'Chest' },
            { id: 'u2e6', name: 'Hammer Curls', sets: 3, reps: '12-15', rest: 60, muscle: 'Biceps' },
            { id: 'u2e7', name: 'Cable Curl', sets: 3, reps: '12-15', rest: 60, muscle: 'Biceps' },
            { id: 'u2e8', name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: 60, muscle: 'Triceps' }
        ]
    },
    lower2: {
        id: 'lower2',
        name: 'Lower 2',
        subtitle: 'Hypertrophy Focus',
        color: 'bg-green-500',
        exercises: [
            { id: 'l2e1', name: 'Belt Squat', sets: 4, reps: '10-12', rest: 120, muscle: 'Quads' },
            { id: 'l2e2', name: 'Leg Extension', sets: 4, reps: '12-15', rest: 90, muscle: 'Quads' },
            { id: 'l2e3', name: 'Bulgarian Split Squat', sets: 3, reps: '10-12 each', rest: 90, muscle: 'Quads/Glutes' },
            { id: 'l2e4', name: 'Leg Press', sets: 3, reps: '12-15', rest: 90, muscle: 'Quads' },
            { id: 'l2e5', name: 'Seated Leg Curl', sets: 3, reps: '12-15', rest: 90, muscle: 'Hamstrings' },
            { id: 'l2e6', name: 'Seated Calf Raise', sets: 4, reps: '15-20', rest: 60, muscle: 'Calves' },
            { id: 'l2e7', name: 'Hanging Leg Raise', sets: 3, reps: '12-15', rest: 60, muscle: 'Core' }
        ]
    }
};

class GymApp {
    constructor() {
        this.currentWorkout = null;
        this.activeExercise = null;
        this.workoutSession = null;
        this.editMode = false;
        this.editingExercise = null;
        this.editingWorkoutHeader = null;
        this.creatingNewWorkout = false;
        this.showMenu = false;
        this.viewingHistory = null;
        this.draggedWorkoutId = null;
        this.dragOverIndex = null;
        this.draggedExerciseId = null;
        this.draggedExerciseWorkoutId = null;
        this.dragOverExerciseIndex = null;
        this.dragOverExerciseWorkoutId = null;
        this.load();
        this.setupEventDelegation();
        this.render();
    }

    save() {
        try {
            localStorage.setItem('gymWorkouts', JSON.stringify(this.workouts));
            localStorage.setItem('gymHistory', JSON.stringify(this.workoutHistory));
            this.saveWorkoutOrder();
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
            alert('Failed to save data. Your browser may be out of storage space.');
        }
    }

    load() {
        try {
            const savedWorkouts = localStorage.getItem('gymWorkouts');
            const savedHistory = localStorage.getItem('gymHistory');
            const savedOrder = localStorage.getItem('gymWorkoutOrder');
            this.workouts = savedWorkouts ? JSON.parse(savedWorkouts) : defaultWorkouts;
            this.workoutHistory = savedHistory ? JSON.parse(savedHistory) : [];
            this.workoutOrder = savedOrder ? JSON.parse(savedOrder) : null;
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            this.workouts = defaultWorkouts;
            this.workoutHistory = [];
            this.workoutOrder = null;
        }
    }

    getWorkoutOrder() {
        // If we have a stored order, use it; otherwise use current object key order
        if (this.workoutOrder && Array.isArray(this.workoutOrder)) {
            // Filter to only include workouts that still exist
            return this.workoutOrder.filter(id => this.workouts[id]);
        }
        // Default order from object keys
        return Object.keys(this.workouts);
    }

    saveWorkoutOrder() {
        const order = this.getWorkoutOrder();
        try {
            localStorage.setItem('gymWorkoutOrder', JSON.stringify(order));
        } catch (error) {
            console.error('Failed to save workout order:', error);
        }
    }

    startWorkout(workoutId) {
        this.currentWorkout = this.workouts[workoutId];
        this.workoutSession = { startTime: new Date().toISOString(), workoutId: workoutId, exercises: {} };
        this.render();
    }

    finishWorkout() {
        const history = {
            id: Date.now(),
            date: new Date().toISOString(),
            workoutName: this.currentWorkout.name,
            exercises: this.workoutSession.exercises
        };
        this.workoutHistory = [history, ...this.workoutHistory];
        this.save();
        this.currentWorkout = null;
        this.workoutSession = null;
        this.render();
    }

    render() {
        const app = document.getElementById('app');
        if (this.viewingHistory) {
            app.innerHTML = this.renderHistoryDetail();
        } else if (this.creatingNewWorkout) {
            app.innerHTML = this.renderNewWorkoutForm();
        } else if (this.editingWorkoutHeader) {
            app.innerHTML = this.renderWorkoutHeaderEdit();
        } else if (this.editingExercise) {
            app.innerHTML = this.renderExerciseEdit();
        } else if (this.activeExercise) {
            app.innerHTML = this.renderExerciseDetail();
        } else if (this.currentWorkout) {
            app.innerHTML = this.renderWorkoutList();
        } else {
            app.innerHTML = this.renderHome();
        }
    }

    setupEventDelegation() {
        // Set up event delegation once for better performance
        const app = document.getElementById('app');
        app.addEventListener('click', (e) => {
            if (e.target.closest('.delete-history-btn')) {
                e.stopPropagation();
                e.preventDefault();
                const button = e.target.closest('.delete-history-btn');
                const index = parseInt(button.getAttribute('data-index'));
                if (confirm('Delete this workout session? This cannot be undone.')) {
                    this.workoutHistory.splice(index, 1);
                    this.save();
                    this.render();
                }
            } else if (e.target.closest('.view-history-btn')) {
                e.preventDefault();
                const button = e.target.closest('.view-history-btn');
                const index = parseInt(button.getAttribute('data-index'));
                this.viewHistory(index);
            }
        });
    }

    renderHome() {
        // Get workouts in order (maintain order from object keys or use stored order)
        const workoutOrder = this.getWorkoutOrder();
        const workoutCards = workoutOrder.map((workoutId, index) => {
            const workout = this.workouts[workoutId];
            if (!workout) return '';
            
            const isDragging = this.draggedWorkoutId === workoutId;
            const isDragOver = this.dragOverIndex === index && this.draggedWorkoutId !== workoutId;
            
            return `
            <div 
                draggable="${this.editMode ? 'true' : 'false'}"
                data-workout-id="${workout.id}"
                data-workout-index="${index}"
                class="workout-card bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 mb-4 transition-all ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}"
                ${this.editMode ? `ondragstart="return app.handleDragStart(event, '${workout.id}')" ondragend="app.handleDragEnd(event)" ondragover="app.handleDragOver(event, ${index})" ondragleave="app.handleDragLeave(event)" ondrop="app.handleDrop(event, ${index})"` : ''}
            >
                <div class="p-5 flex items-center justify-between">
                    <div class="flex items-center gap-3 flex-1">
                        ${this.editMode ? `<div class="cursor-move text-slate-500 hover:text-slate-300 text-2xl select-none" title="Drag to reorder" draggable="false">☰</div>` : ''}
                        <button onclick="app.startWorkout('${workout.id}')" class="flex items-center gap-4 flex-1 text-left ${this.editMode ? 'opacity-50 pointer-events-none' : ''}">
                            <div class="${workout.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-inner">🏋️</div>
                            <div>
                                <h3 class="text-xl font-bold">${workout.name}</h3>
                                <p class="text-slate-400 text-sm">${workout.subtitle}</p>
                            </div>
                        </button>
                    </div>
                    ${this.editMode ? `<div class="flex gap-2">
                        <button onclick="app.editingWorkoutHeader = '${workout.id}'; app.render()" class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase">Rename</button>
                        <button onclick="app.deleteWorkout('${workout.id}')" class="bg-red-600/20 text-red-400 px-3 py-1 rounded text-xs font-bold uppercase">Delete</button>
                    </div>` : ''}
                </div>
                ${this.editMode ? this.renderEditExercises(workout) : ''}
            </div>
        `;
        }).join('');

        const historyHTML = this.workoutHistory.length > 0 ? `
            <div class="p-4 mt-4">
                <h2 class="text-xl font-bold mb-4">Recent Sessions</h2>
                <div class="space-y-3" id="historyList">
                    ${this.workoutHistory.slice(0, 5).map((w, index) => `
                        <div class="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
                            <button class="view-history-btn w-full p-4 flex justify-between items-center text-left hover:bg-slate-800 transition-all" data-index="${index}">
                                <div>
                                    <div class="font-bold">${w.workoutName}</div>
                                    <div class="text-slate-500 text-xs mt-1">${new Date(w.date).toLocaleDateString()} • ${Object.keys(w.exercises).length} exercises</div>
                                </div>
                                <div class="text-slate-600 text-xl">→</div>
                            </button>
                            <button class="delete-history-btn w-full bg-red-500/10 text-red-400 py-2 text-xs font-bold uppercase hover:bg-red-500/20 transition-all border-t border-slate-700/50" data-index="${index}" aria-label="Delete workout session">Delete</button>
                        </div>`).join('')}
                </div>
            </div>` : '';

        return `
            <div class="min-h-screen pb-20 animate-fade-in">
                <div class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 pb-12 rounded-b-[2rem] shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h1 class="text-3xl font-black tracking-tight ">Gym Tracker</h1>
                        <button onclick="app.showMenu = !app.showMenu; app.render()" class="bg-white/10 p-2 rounded-lg" aria-label="Settings menu">⚙️</button>
                    </div>
                    <p class="text-blue-100 font-medium">Ready for your session, Gymbro?</p>
                </div>
                ${this.showMenu ? `<div class="p-4 -mt-6"><button onclick="app.editMode = !app.editMode; app.showMenu = false; app.render()" class="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl font-black">${this.editMode ? 'Finish Customizing' : 'Customize Workouts'}</button></div>` : '<div class="h-6"></div>'}
                <div class="px-4">
                    ${workoutCards}
                    ${this.editMode ? `<div class="bg-slate-800/50 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-4 text-center">
                        <button onclick="app.creatingNewWorkout = true; app.render()" class="w-full bg-blue-600/20 text-blue-400 p-4 rounded-lg font-bold text-lg hover:bg-blue-600/30 transition-all">
                            + Create New Workout
                        </button>
                    </div>` : ''}
                </div>
                ${historyHTML}
            </div>`;
    }

    renderEditExercises(workout) {
        const exercises = workout.exercises.map((ex, index) => {
            const isDragging = this.draggedExerciseId === ex.id && this.draggedExerciseWorkoutId === workout.id;
            const isDragOver = this.dragOverExerciseIndex === index && this.dragOverExerciseWorkoutId === workout.id && this.draggedExerciseId !== ex.id;
            
            return `
                <div 
                    draggable="true"
                    data-exercise-id="${ex.id}"
                    data-exercise-index="${index}"
                    data-workout-id="${workout.id}"
                    class="exercise-card flex items-center justify-between bg-slate-800 p-3 rounded-lg border border-slate-700 transition-all ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}"
                    ondragstart="return app.handleExerciseDragStart(event, '${workout.id}', '${ex.id}')"
                    ondragend="app.handleExerciseDragEnd(event)"
                    ondragover="app.handleExerciseDragOver(event, '${workout.id}', ${index})"
                    ondragleave="app.handleExerciseDragLeave(event)"
                    ondrop="app.handleExerciseDrop(event, '${workout.id}', ${index})"
                >
                    <div class="flex items-center gap-3 flex-1">
                        <div class="cursor-move text-slate-500 hover:text-slate-300 text-lg select-none" title="Drag to reorder" draggable="false">☰</div>
                        <div>
                            <div class="text-white font-bold text-sm">${ex.name}</div>
                            <div class="text-slate-400 text-xs">${ex.sets} sets • ${ex.reps}</div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="app.editingExercise = { workoutId: '${workout.id}', exercise: ${JSON.stringify(ex).replace(/"/g, '&quot;').replace(/'/g, '&#39;')} }; app.render()" class="bg-blue-500/10 text-blue-400 p-2 rounded text-xs font-bold uppercase">Edit</button>
                        <button onclick="app.deleteExercise('${workout.id}', '${ex.id}')" class="bg-red-500/10 text-red-400 p-2 rounded text-xs font-bold uppercase">✕</button>
                    </div>
                </div>`;
        }).join('');
        
        const isDragOverEnd = this.dragOverExerciseIndex === workout.exercises.length && this.dragOverExerciseWorkoutId === workout.id;
        
        return `<div class="p-4 bg-slate-900/80 space-y-2 border-t border-slate-700/50">
            ${exercises}
            ${this.draggedExerciseId ? `
                <div 
                    class="exercise-drop-zone min-h-[60px] border-2 border-dashed rounded-lg transition-all ${isDragOverEnd ? 'border-blue-500 bg-blue-500/10' : 'border-slate-600 border-transparent'}"
                    ondragover="app.handleExerciseDragOver(event, '${workout.id}', ${workout.exercises.length})"
                    ondragleave="app.handleExerciseDragLeave(event)"
                    ondrop="app.handleExerciseDrop(event, '${workout.id}', ${workout.exercises.length})"
                ></div>
            ` : ''}
            <button onclick="app.addExercise('${workout.id}')" class="w-full bg-blue-600/10 text-blue-400 p-3 rounded-lg font-bold text-sm">+ Add New Exercise</button>
        </div>`;
    }

    renderNewWorkoutForm() {
        const colors = [
            { value: 'bg-red-500', label: 'Red' },
            { value: 'bg-blue-500', label: 'Blue' },
            { value: 'bg-purple-500', label: 'Purple' },
            { value: 'bg-orange-500', label: 'Orange' },
            { value: 'bg-green-500', label: 'Green' },
            { value: 'bg-pink-500', label: 'Pink' },
            { value: 'bg-yellow-500', label: 'Yellow' },
            { value: 'bg-indigo-500', label: 'Indigo' }
        ];
        
        const colorOptions = colors.map(color => 
            `<label class="flex items-center gap-3 p-3 rounded-lg border border-slate-700 cursor-pointer hover:bg-slate-700/50 transition-all">
                <input type="radio" name="newWorkoutColor" value="${color.value}" ${color.value === 'bg-blue-500' ? 'checked' : ''} class="w-4 h-4">
                <div class="${color.value} w-8 h-8 rounded-lg"></div>
                <span class="text-sm font-medium">${color.label}</span>
            </label>`
        ).join('');
        
        return `<div class="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50 animate-fade-in">
            <div class="bg-slate-800 p-6 rounded-3xl w-full max-w-md border border-slate-700 max-h-[90vh] overflow-y-auto">
                <h2 class="text-xl font-black mb-6 uppercase">Create New Workout</h2>
                <input id="newWorkoutName" type="text" class="w-full bg-slate-900 p-4 rounded-xl mb-4 border border-slate-700 outline-none" placeholder="Workout Name" autofocus>
                <input id="newWorkoutSubtitle" type="text" class="w-full bg-slate-900 p-4 rounded-xl mb-6 border border-slate-700 outline-none" placeholder="Subtitle (optional)">
                <div class="mb-6">
                    <label class="block text-sm font-bold text-slate-400 uppercase mb-3">Color</label>
                    <div class="grid grid-cols-2 gap-2">
                        ${colorOptions}
                    </div>
                </div>
                <button onclick="app.saveNewWorkout()" class="w-full bg-blue-600 p-4 rounded-xl font-black mb-2 shadow-lg uppercase">CREATE WORKOUT</button>
                <button onclick="app.creatingNewWorkout = false; app.render()" class="w-full text-slate-500 font-bold py-2">CANCEL</button>
            </div>
        </div>`;
    }

    renderWorkoutHeaderEdit() {
        const w = this.workouts[this.editingWorkoutHeader];
        return `<div class="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50 animate-fade-in"><div class="bg-slate-800 p-6 rounded-3xl w-full max-w-md border border-slate-700">
            <h2 class="text-xl font-black mb-6 uppercase">Rename Workout</h2>
            <input id="hName" type="text" value="${w.name}" class="w-full bg-slate-900 p-4 rounded-xl mb-4 border border-slate-700 outline-none" placeholder="Name">
            <input id="hSub" type="text" value="${w.subtitle}" class="w-full bg-slate-900 p-4 rounded-xl mb-6 border border-slate-700 outline-none" placeholder="Subtitle">
            <button onclick="app.saveWorkoutHeader()" class="w-full bg-blue-600 p-4 rounded-xl font-black mb-2 shadow-lg">SAVE CHANGES</button>
            <button onclick="app.editingWorkoutHeader = null; app.render()" class="w-full text-slate-500 font-bold py-2">CANCEL</button>
        </div></div>`;
    }

    renderWorkoutList() {
        const exerciseCards = this.currentWorkout.exercises.map(exercise => {
            const sessionData = this.workoutSession.exercises[exercise.id];
            const isComplete = sessionData?.completed || false;
            
            return `<div class="w-full bg-slate-800 rounded-xl p-4 flex items-center gap-4 mb-3 border border-slate-700/50">
                <button onclick="app.activeExercise = ${JSON.stringify(exercise).replace(/"/g, '&quot;').replace(/'/g, '&#39;')}; app.render()" class="flex-1 text-left">
                    <h3 class="font-bold text-lg">${exercise.name}</h3>
                    <div class="text-[10px] font-bold text-slate-500 uppercase">${exercise.sets} SETS • ${exercise.reps} REPS</div>
                </button>
                <button onclick="app.toggleExerciseQuick('${exercise.id}', event)" class="text-3xl" aria-label="${isComplete ? 'Mark as incomplete' : 'Mark as complete'}">${isComplete ? '✅' : '⚪'}</button>
            </div>`;
        }).join('');
        return `<div class="min-h-screen pb-24 animate-fade-in"><div class="${this.currentWorkout.color} p-6 rounded-b-2xl mb-4 shadow-xl"><button onclick="app.currentWorkout = null; app.render()" class="mb-4 bg-black/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">← QUIT</button><h1 class="text-2xl font-black uppercase tracking-tight">${this.currentWorkout.name}</h1><p class="text-white/80 text-sm font-medium">${this.currentWorkout.subtitle}</p></div><div class="px-4">${exerciseCards}</div><div class="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-lg border-t border-slate-800"><button onclick="app.finishWorkout()" class="w-full bg-green-600 py-4 rounded-2xl font-black shadow-lg uppercase">Finish Session</button></div></div>`;
    }

    renderExerciseDetail() {
        const sessionData = this.workoutSession.exercises[this.activeExercise.id] || { 
            sets: Array(this.activeExercise.sets).fill().map(() => ({ weight: '', reps: '' })),
            notes: ''
        };
        
        // Find last session data for this exercise
        const lastSessionData = this.getLastSessionData(this.activeExercise.id);

        const lastSessionHTML = lastSessionData && lastSessionData.sets ? `
            <div class="bg-blue-500/10 border border-blue-500/30 p-4 rounded-xl mb-6">
                <div class="text-blue-400 text-xs font-bold uppercase mb-2">Last Session - ${this.getDaysAgo(lastSessionData.date || this.workoutHistory[0].date)}</div>
                <div class="space-y-1 mb-3">
                    ${lastSessionData.sets.map((set, i) => `
                        <div class="text-white text-sm">Set ${i + 1}: <span class="font-black">${set.weight || '—'} kg × ${set.reps || '—'} reps</span></div>
                    `).join('')}
                </div>
                ${lastSessionData.notes ? `<div class="text-blue-300 text-xs italic mt-2">"${lastSessionData.notes}"</div>` : ''}
            </div>
        ` : '';

        const setsHTML = Array(this.activeExercise.sets).fill().map((_, i) => `
            <div class="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div class="text-slate-400 text-xs font-bold uppercase mb-2">Set ${i + 1} (Target: ${this.activeExercise.reps})</div>
                <div class="flex items-center gap-3">
                    <div class="flex-1">
                        <input type="number" 
                               id="weight-${i}" 
                               value="${sessionData.sets[i]?.weight || ''}" 
                               placeholder="Weight (kg)"
                               class="w-full bg-slate-900 text-white text-xl font-black p-3 rounded-lg border border-slate-700 outline-none">
                    </div>
                    <div class="text-slate-600 text-2xl">×</div>
                    <div class="flex-1">
                        <input type="number" 
                               id="reps-${i}" 
                               value="${sessionData.sets[i]?.reps || ''}" 
                               placeholder="Reps"
                               class="w-full bg-slate-900 text-white text-xl font-black p-3 rounded-lg border border-slate-700 outline-none">
                    </div>
                </div>
            </div>
        `).join('');

        return `<div class="min-h-screen p-6 pb-32 animate-fade-in">
            <button onclick="app.activeExercise = null; app.render()" class="mb-6 font-bold text-slate-400 uppercase text-xs tracking-widest" aria-label="Back to workout">← Back</button>
            <h1 class="text-3xl font-black mb-2">${this.activeExercise.name}</h1>
            <p class="text-slate-500 font-bold mb-8 uppercase tracking-widest text-sm">${this.activeExercise.sets} Sets</p>
            ${lastSessionHTML}
            <div class="space-y-3 mb-6">
                ${setsHTML}
            </div>
            <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <label class="block text-[10px] font-black text-slate-500 uppercase mb-2">Notes</label>
                <textarea id="notesInput" placeholder="How did it feel?" class="w-full bg-slate-900 p-4 rounded-xl border border-slate-700 h-24 outline-none resize-none">${sessionData.notes || ''}</textarea>
            </div>
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800">
                <button onclick="app.saveExerciseWithSets()" class="w-full bg-blue-600 py-5 rounded-2xl font-black text-xl shadow-xl uppercase">Done</button>
            </div>
        </div>`;
    }

    getDaysAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        return date.toLocaleDateString();
    }

    renderExerciseEdit() {
        const ex = this.editingExercise.exercise;
        return `<div class="fixed inset-0 bg-black flex items-center justify-center p-6 z-50 animate-fade-in"><div class="bg-slate-800 p-6 rounded-3xl w-full max-w-md border border-slate-700">
            <h2 class="text-xl font-black mb-6 uppercase">Edit Exercise</h2>
            <input id="editExName" type="text" value="${ex.name}" class="w-full bg-slate-900 p-4 rounded-xl mb-4 border border-slate-700 outline-none">
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div><label class="text-[10px] font-bold text-slate-500">SETS</label><input type="number" id="editExSets" value="${ex.sets}" class="w-full bg-slate-900 p-4 rounded-xl border border-slate-700 outline-none"></div>
                <div><label class="text-[10px] font-bold text-slate-500">REPS</label><input type="text" id="editExReps" value="${ex.reps}" class="w-full bg-slate-900 p-4 rounded-xl border border-slate-700 outline-none"></div>
            </div>
            <button onclick="app.saveExEdit()" class="w-full bg-blue-600 p-4 rounded-xl font-black mb-2 shadow-lg uppercase">Update</button>
            <button onclick="app.editingExercise = null; app.render()" class="w-full text-slate-500 font-bold py-2">CANCEL</button>
        </div></div>`;
    }

    saveNewWorkout() {
        const name = document.getElementById('newWorkoutName').value.trim();
        const subtitle = document.getElementById('newWorkoutSubtitle').value.trim();
        const colorInput = document.querySelector('input[name="newWorkoutColor"]:checked');
        const color = colorInput ? colorInput.value : 'bg-blue-500';
        
        if (!name) {
            alert('Workout name cannot be empty');
            return;
        }
        
        // Generate unique ID
        const newId = 'workout_' + Date.now();
        
        // Create new workout
        this.workouts[newId] = {
            id: newId,
            name: name,
            subtitle: subtitle || 'Custom Workout',
            color: color,
            exercises: []
        };
        
        // Add to order array
        const currentOrder = this.getWorkoutOrder();
        currentOrder.push(newId);
        this.workoutOrder = currentOrder;
        
        this.save();
        this.creatingNewWorkout = false;
        this.render();
    }

    saveWorkoutHeader() {
        const w = this.workouts[this.editingWorkoutHeader];
        const name = document.getElementById('hName').value.trim();
        const subtitle = document.getElementById('hSub').value.trim();
        
        if (!name) {
            alert('Workout name cannot be empty');
            return;
        }
        
        w.name = name;
        w.subtitle = subtitle || w.subtitle;
        this.save();
        this.editingWorkoutHeader = null;
        this.render();
    }

    saveExEdit() {
        const workout = this.workouts[this.editingExercise.workoutId];
        const ex = workout.exercises.find(e => e.id === this.editingExercise.exercise.id);
        const name = document.getElementById('editExName').value.trim();
        const sets = parseInt(document.getElementById('editExSets').value);
        const reps = document.getElementById('editExReps').value.trim();
        
        const updatedExercise = { ...ex, name, sets, reps };
        if (!this.validateExercise(updatedExercise)) {
            return;
        }
        
        ex.name = name;
        ex.sets = sets;
        ex.reps = reps;
        this.save();
        this.editingExercise = null;
        this.render();
    }

    addExercise(workoutId) {
        this.workouts[workoutId].exercises.push({ id: Date.now().toString(), name: 'New Exercise', sets: 3, reps: '10', muscle: 'Target' });
        this.save(); this.render();
    }

    deleteExercise(wId, eId) {
        if(confirm('Delete this exercise?')) {
            this.workouts[wId].exercises = this.workouts[wId].exercises.filter(e => e.id !== eId);
            this.save(); this.render();
        }
    }

    saveExerciseWithSets() {
        const sets = [];
        for (let i = 0; i < this.activeExercise.sets; i++) {
            const weightInput = document.getElementById(`weight-${i}`);
            const repsInput = document.getElementById(`reps-${i}`);
            const weight = weightInput ? parseFloat(weightInput.value) || 0 : 0;
            const reps = repsInput ? parseInt(repsInput.value) || 0 : 0;
            sets.push({
                weight: weight > 0 ? weight : '',
                reps: reps > 0 ? reps : ''
            });
        }
        
        const notesInput = document.getElementById('notesInput');
        this.workoutSession.exercises[this.activeExercise.id] = {
            sets: sets,
            notes: notesInput ? notesInput.value.trim() : '',
            date: new Date().toISOString(),
            completed: true
        };
        
        this.activeExercise = null;
        this.render();
    }

    toggleExerciseQuick(id, e) {
        e.stopPropagation();
        const exercise = this.currentWorkout.exercises.find(ex => ex.id === id);
        if (!this.workoutSession.exercises[id]) {
            this.workoutSession.exercises[id] = { 
                sets: Array(exercise.sets).fill().map(() => ({ weight: '', reps: '' })),
                notes: '',
                date: new Date().toISOString(),
                completed: true
            };
        } else {
            this.workoutSession.exercises[id].completed = !this.workoutSession.exercises[id].completed;
        }
        this.render();
    }

    renderHistoryDetail() {
        const historyItem = this.workoutHistory.find(h => h.id === this.viewingHistory);
        if (!historyItem) {
            this.viewingHistory = null;
            this.render();
            return '';
        }

        const exercisesList = Object.entries(historyItem.exercises).map(([exerciseId, data]) => {
            const exerciseName = this.findExerciseName(exerciseId);

            return `
                <div class="bg-slate-800 p-4 rounded-lg border border-slate-700/50">
                    <h3 class="font-bold text-lg mb-3">${exerciseName}</h3>
                    ${data.sets ? `
                        <div class="space-y-2 mb-3">
                            ${data.sets.map((set, i) => `
                                <div class="flex justify-between items-center text-sm">
                                    <span class="text-slate-400">Set ${i + 1}</span>
                                    <span class="font-black text-blue-400">${set.weight || '—'} kg × ${set.reps || '—'} reps</span>
                                </div>
                            `).join('')}
                        </div>
                    ` : (data.weight ? `<div class="text-blue-400 font-black text-2xl mb-2">${data.weight} kg</div>` : '<div class="text-slate-500 text-sm mb-2">No weight saved</div>')}
                    ${data.notes ? `<div class="text-slate-400 text-sm italic mt-2">"${data.notes}"</div>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="min-h-screen pb-20 animate-fade-in">
                <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-6 pb-8 rounded-b-2xl shadow-xl mb-4">
                    <button onclick="app.viewingHistory = null; app.render()" class="mb-4 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest" aria-label="Back to home">← Back</button>
                    <h1 class="text-2xl font-black uppercase mb-2">${historyItem.workoutName}</h1>
                    <div class="text-slate-400 text-sm font-medium">${new Date(historyItem.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
                <div class="px-4 space-y-3">
                    ${Object.keys(historyItem.exercises).length > 0 ? exercisesList : '<div class="text-center text-slate-500 py-8">No exercises saved</div>'}
                </div>
            </div>
        `;
    }

    viewHistory(index) {
        this.viewingHistory = this.workoutHistory[index].id;
        this.render();
    }

    deleteHistory(id) {
        if(confirm('Delete this workout session? This cannot be undone.')) {
            this.workoutHistory = this.workoutHistory.filter(h => h.id !== id);
            this.save();
            this.viewingHistory = null;
            this.render();
        }
    }

    deleteWorkout(workoutId) {
        const workout = this.workouts[workoutId];
        if (!workout) return;
        
        // Prevent deleting if it's a default workout (optional safety check)
        const defaultWorkoutIds = Object.keys(defaultWorkouts);
        if (defaultWorkoutIds.includes(workoutId)) {
            if (!confirm(`Are you sure you want to delete "${workout.name}"? This is a default workout and will be restored if you clear your data.`)) {
                return;
            }
        } else {
            if (!confirm(`Delete "${workout.name}"? This cannot be undone.`)) {
                return;
            }
        }
        
        delete this.workouts[workoutId];
        // Remove from order array if it exists
        if (this.workoutOrder) {
            this.workoutOrder = this.workoutOrder.filter(id => id !== workoutId);
        }
        this.save();
        this.render();
    }

    // Drag and drop handlers
    handleDragStart(event, workoutId) {
        // Allow drag from anywhere on the card, including the icon
        // Only prevent if clicking directly on action buttons
        if (event.target.closest('button') && !event.target.closest('.workout-card') && event.target.tagName !== 'DIV') {
            event.preventDefault();
            return false;
        }
        this.draggedWorkoutId = workoutId;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', workoutId);
        event.currentTarget.classList.add('dragging');
        return true;
    }

    handleDragEnd(event) {
        event.currentTarget.classList.remove('dragging');
        // Clear all drag-over classes
        document.querySelectorAll('.workout-card.drag-over').forEach(el => el.classList.remove('drag-over'));
        this.draggedWorkoutId = null;
        this.dragOverIndex = null;
    }

    handleDragOver(event, index) {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'move';
        const currentOrder = this.getWorkoutOrder();
        if (this.draggedWorkoutId && this.draggedWorkoutId !== currentOrder[index]) {
            // Update visual feedback without re-rendering
            if (this.dragOverIndex !== index) {
                // Remove previous drag-over class
                if (this.dragOverIndex !== null) {
                    const prevCard = document.querySelector(`[data-workout-index="${this.dragOverIndex}"]`);
                    if (prevCard) prevCard.classList.remove('drag-over');
                }
                // Add drag-over class to current target
                const currentCard = event.currentTarget;
                currentCard.classList.add('drag-over');
                this.dragOverIndex = index;
            }
        }
    }

    handleDragLeave(event) {
        // Only clear if we're actually leaving the element
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX;
        const y = event.clientY;
        if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
            event.currentTarget.classList.remove('drag-over');
            this.dragOverIndex = null;
        }
    }

    handleDrop(event, targetIndex) {
        event.preventDefault();
        event.stopPropagation();
        
        if (!this.draggedWorkoutId) return;
        
        // Clear drag-over visual feedback
        event.currentTarget.classList.remove('drag-over');
        
        const currentOrder = this.getWorkoutOrder();
        const draggedIndex = currentOrder.indexOf(this.draggedWorkoutId);
        
        if (draggedIndex === -1) {
            this.draggedWorkoutId = null;
            this.dragOverIndex = null;
            this.render();
            return;
        }
        
        // Reorder the array
        const newOrder = [...currentOrder];
        const [removed] = newOrder.splice(draggedIndex, 1);
        newOrder.splice(targetIndex, 0, removed);
        
        // Update the order
        this.workoutOrder = newOrder;
        this.save();
        
        this.draggedWorkoutId = null;
        this.dragOverIndex = null;
        this.render();
    }

    // Exercise drag and drop handlers
    handleExerciseDragStart(event, workoutId, exerciseId) {
        // Allow drag from anywhere on the card, including the icon
        // Only prevent if clicking directly on action buttons (Edit/Delete)
        if (event.target.closest('button') && (event.target.textContent === 'Edit' || event.target.textContent === '✕')) {
            event.preventDefault();
            return false;
        }
        this.draggedExerciseId = exerciseId;
        this.draggedExerciseWorkoutId = workoutId;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', exerciseId);
        event.currentTarget.classList.add('dragging');
        return true;
    }

    handleExerciseDragEnd(event) {
        event.currentTarget.classList.remove('dragging');
        // Clear all drag-over classes
        document.querySelectorAll('.exercise-card.drag-over').forEach(el => el.classList.remove('drag-over'));
        this.draggedExerciseId = null;
        this.draggedExerciseWorkoutId = null;
        this.dragOverExerciseIndex = null;
        this.dragOverExerciseWorkoutId = null;
    }

    handleExerciseDragOver(event, workoutId, index) {
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'move';
        
        if (!this.draggedExerciseId) return;
        
        const targetExercise = this.workouts[workoutId]?.exercises[index];
        const isSameExercise = targetExercise?.id === this.draggedExerciseId;
        const isSameWorkout = this.draggedExerciseWorkoutId === workoutId;
        
        // Allow dragging to any workout, but skip if it's the same exercise
        if (!isSameExercise) {
            // Update visual feedback without re-rendering
            const newKey = `${workoutId}-${index}`;
            const currentKey = this.dragOverExerciseIndex !== null ? `${this.dragOverExerciseWorkoutId || workoutId}-${this.dragOverExerciseIndex}` : null;
            
            if (newKey !== currentKey) {
                // Remove previous drag-over class
                if (this.dragOverExerciseIndex !== null && this.dragOverExerciseWorkoutId) {
                    const prevExercise = document.querySelector(`[data-exercise-index="${this.dragOverExerciseIndex}"][data-workout-id="${this.dragOverExerciseWorkoutId}"]`);
                    if (prevExercise) prevExercise.classList.remove('drag-over');
                }
                // Add drag-over class to current target
                const currentExercise = event.currentTarget;
                currentExercise.classList.add('drag-over');
                this.dragOverExerciseIndex = index;
                this.dragOverExerciseWorkoutId = workoutId;
            }
        }
    }

    handleExerciseDragLeave(event) {
        // Only clear if we're actually leaving the element
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX;
        const y = event.clientY;
        if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
            event.currentTarget.classList.remove('drag-over');
            this.dragOverExerciseIndex = null;
            this.dragOverExerciseWorkoutId = null;
        }
    }

    handleExerciseDrop(event, workoutId, targetIndex) {
        event.preventDefault();
        event.stopPropagation();
        
        if (!this.draggedExerciseId) return;
        
        // Clear drag-over visual feedback
        event.currentTarget.classList.remove('drag-over');
        
        const targetWorkout = this.workouts[workoutId];
        const sourceWorkout = this.workouts[this.draggedExerciseWorkoutId];
        
        if (!targetWorkout || !sourceWorkout) return;
        
        // Find the exercise being dragged
        const draggedExercise = sourceWorkout.exercises.find(ex => ex.id === this.draggedExerciseId);
        if (!draggedExercise) return;
        
        const draggedIndex = sourceWorkout.exercises.findIndex(ex => ex.id === this.draggedExerciseId);
        
        if (draggedIndex === -1) {
            this.draggedExerciseId = null;
            this.draggedExerciseWorkoutId = null;
            this.dragOverExerciseIndex = null;
            this.dragOverExerciseWorkoutId = null;
            this.render();
            return;
        }
        
        // If moving within the same workout, just reorder
        if (this.draggedExerciseWorkoutId === workoutId) {
            if (draggedIndex === targetIndex) {
                this.draggedExerciseId = null;
                this.draggedExerciseWorkoutId = null;
                this.dragOverExerciseIndex = null;
                this.dragOverExerciseWorkoutId = null;
                this.render();
                return;
            }
            
            const newExercises = [...targetWorkout.exercises];
            const [removed] = newExercises.splice(draggedIndex, 1);
            newExercises.splice(targetIndex, 0, removed);
            targetWorkout.exercises = newExercises;
        } else {
            // Moving between different workouts
            // Remove from source workout
            sourceWorkout.exercises.splice(draggedIndex, 1);
            
            // Add to target workout at the target index
            const newExercises = [...targetWorkout.exercises];
            newExercises.splice(targetIndex, 0, draggedExercise);
            targetWorkout.exercises = newExercises;
        }
        
        this.save();
        
        this.draggedExerciseId = null;
        this.draggedExerciseWorkoutId = null;
        this.dragOverExerciseIndex = null;
        this.dragOverExerciseWorkoutId = null;
        this.render();
    }

    // Helper function to escape HTML and prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Helper function to validate exercise data
    validateExercise(exercise) {
        if (!exercise.name || exercise.name.trim() === '') {
            alert('Exercise name cannot be empty');
            return false;
        }
        if (!exercise.sets || exercise.sets < 1 || exercise.sets > 20) {
            alert('Sets must be between 1 and 20');
            return false;
        }
        if (!exercise.reps || exercise.reps.trim() === '') {
            alert('Reps cannot be empty');
            return false;
        }
        return true;
    }

    // Helper function to find exercise name by ID
    findExerciseName(exerciseId) {
        for (let workout of Object.values(this.workouts)) {
            const ex = workout.exercises.find(e => e.id === exerciseId);
            if (ex) return ex.name;
        }
        return exerciseId;
    }

    // Helper function to get last session data for an exercise
    getLastSessionData(exerciseId) {
        for (let history of this.workoutHistory) {
            if (history.exercises[exerciseId]) {
                return history.exercises[exerciseId];
            }
        }
        return null;
    }
}

const app = new GymApp();

