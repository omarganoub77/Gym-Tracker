const programTemplates = {
    upperLower: {
        name: 'Upper/Lower Split',
        description: '4 days: 2 Upper, 2 Lower',
        icon: '🏋️',
        workouts: {
            upper1: {
                id: 'upper1',
                name: 'Upper 1',
                subtitle: 'Strength Focus',
                color: 'bg-red-500',
                exercises: [
                    { id: 'u1e1', name: 'Dumbbell Bench Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Chest' },
                    { id: 'u1e2', name: 'Cable Row', sets: 4, reps: '6-8', rest: 180, muscle: 'Back' },
                    { id: 'u1e3', name: 'Overhead Press', sets: 3, reps: '8-10', rest: 120, muscle: 'Shoulders' },
                    { id: 'u1e4', name: 'Lat Pulldown', sets: 3, reps: '8-10', rest: 120, muscle: 'Back' },
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
        }
    },
    ppl: {
        name: 'Push/Pull/Legs',
        description: '6 days: Push, Pull, Legs (2x per week)',
        icon: '💪',
        workouts: {
            push1: {
                id: 'push1',
                name: 'Push 1',
                subtitle: 'Chest, Shoulders, Triceps',
                color: 'bg-red-500',
                exercises: [
                    { id: 'push1e1', name: 'Barbell Bench Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Chest' },
                    { id: 'push1e2', name: 'Overhead Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Shoulders' },
                    { id: 'push1e3', name: 'Incline Dumbbell Press', sets: 3, reps: '8-10', rest: 120, muscle: 'Chest' },
                    { id: 'push1e4', name: 'Lateral Raises', sets: 3, reps: '12-15', rest: 90, muscle: 'Shoulders' },
                    { id: 'push1e5', name: 'Tricep Dips', sets: 3, reps: '8-10', rest: 90, muscle: 'Triceps' },
                    { id: 'push1e6', name: 'Cable Flyes', sets: 3, reps: '12-15', rest: 60, muscle: 'Chest' },
                    { id: 'push1e7', name: 'Overhead Tricep Extension', sets: 3, reps: '12-15', rest: 60, muscle: 'Triceps' }
                ]
            },
            pull1: {
                id: 'pull1',
                name: 'Pull 1',
                subtitle: 'Back, Biceps',
                color: 'bg-blue-500',
                exercises: [
                    { id: 'pull1e1', name: 'Deadlift', sets: 4, reps: '5-6', rest: 180, muscle: 'Back' },
                    { id: 'pull1e2', name: 'Pull-ups', sets: 4, reps: '6-8', rest: 180, muscle: 'Back' },
                    { id: 'pull1e3', name: 'Barbell Row', sets: 3, reps: '8-10', rest: 120, muscle: 'Back' },
                    { id: 'pull1e4', name: 'Face Pulls', sets: 3, reps: '15-20', rest: 90, muscle: 'Rear Delts' },
                    { id: 'pull1e5', name: 'Barbell Curl', sets: 3, reps: '8-10', rest: 90, muscle: 'Biceps' },
                    { id: 'pull1e6', name: 'Hammer Curls', sets: 3, reps: '10-12', rest: 60, muscle: 'Biceps' },
                    { id: 'pull1e7', name: 'Shrugs', sets: 3, reps: '12-15', rest: 60, muscle: 'Traps' }
                ]
            },
            legs1: {
                id: 'legs1',
                name: 'Legs 1',
                subtitle: 'Quads, Hamstrings, Glutes',
                color: 'bg-green-500',
                exercises: [
                    { id: 'legs1e1', name: 'Squat', sets: 4, reps: '6-8', rest: 180, muscle: 'Quads' },
                    { id: 'legs1e2', name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: 180, muscle: 'Hamstrings' },
                    { id: 'legs1e3', name: 'Leg Press', sets: 3, reps: '10-12', rest: 120, muscle: 'Quads' },
                    { id: 'legs1e4', name: 'Leg Curl', sets: 3, reps: '10-12', rest: 90, muscle: 'Hamstrings' },
                    { id: 'legs1e5', name: 'Bulgarian Split Squat', sets: 3, reps: '10-12 each', rest: 90, muscle: 'Quads' },
                    { id: 'legs1e6', name: 'Calf Raises', sets: 4, reps: '15-20', rest: 60, muscle: 'Calves' },
                    { id: 'legs1e7', name: 'Abs (Cable Crunch)', sets: 3, reps: '15-20', rest: 60, muscle: 'Core' }
                ]
            },
            push2: {
                id: 'push2',
                name: 'Push 2',
                subtitle: 'Chest, Shoulders, Triceps',
                color: 'bg-orange-500',
                exercises: [
                    { id: 'push2e1', name: 'Incline Barbell Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Chest' },
                    { id: 'push2e2', name: 'Dumbbell Shoulder Press', sets: 4, reps: '8-10', rest: 120, muscle: 'Shoulders' },
                    { id: 'push2e3', name: 'Dumbbell Bench Press', sets: 3, reps: '10-12', rest: 120, muscle: 'Chest' },
                    { id: 'push2e4', name: 'Lateral Raises', sets: 3, reps: '12-15', rest: 90, muscle: 'Shoulders' },
                    { id: 'push2e5', name: 'Tricep Pushdown', sets: 3, reps: '10-12', rest: 90, muscle: 'Triceps' },
                    { id: 'push2e6', name: 'Pec Deck', sets: 3, reps: '12-15', rest: 60, muscle: 'Chest' },
                    { id: 'push2e7', name: 'Skullcrushers', sets: 3, reps: '10-12', rest: 60, muscle: 'Triceps' }
                ]
            },
            pull2: {
                id: 'pull2',
                name: 'Pull 2',
                subtitle: 'Back, Biceps',
                color: 'bg-purple-500',
                exercises: [
                    { id: 'pull2e1', name: 'Lat Pulldown', sets: 4, reps: '8-10', rest: 120, muscle: 'Back' },
                    { id: 'pull2e2', name: 'Cable Row', sets: 4, reps: '10-12', rest: 120, muscle: 'Back' },
                    { id: 'pull2e3', name: 'Single Arm Dumbbell Row', sets: 3, reps: '10-12', rest: 90, muscle: 'Back' },
                    { id: 'pull2e4', name: 'Reverse Flyes', sets: 3, reps: '12-15', rest: 90, muscle: 'Rear Delts' },
                    { id: 'pull2e5', name: 'Dumbbell Curl', sets: 3, reps: '10-12', rest: 90, muscle: 'Biceps' },
                    { id: 'pull2e6', name: 'Cable Curl', sets: 3, reps: '12-15', rest: 60, muscle: 'Biceps' },
                    { id: 'pull2e7', name: 'Dumbbell Shrugs', sets: 3, reps: '12-15', rest: 60, muscle: 'Traps' }
                ]
            },
            legs2: {
                id: 'legs2',
                name: 'Legs 2',
                subtitle: 'Quads, Hamstrings, Glutes',
                color: 'bg-pink-500',
                exercises: [
                    { id: 'legs2e1', name: 'Front Squat', sets: 4, reps: '8-10', rest: 180, muscle: 'Quads' },
                    { id: 'legs2e2', name: 'Hip Thrust', sets: 4, reps: '10-12', rest: 120, muscle: 'Glutes' },
                    { id: 'legs2e3', name: 'Leg Extension', sets: 3, reps: '12-15', rest: 90, muscle: 'Quads' },
                    { id: 'legs2e4', name: 'Seated Leg Curl', sets: 3, reps: '12-15', rest: 90, muscle: 'Hamstrings' },
                    { id: 'legs2e5', name: 'Walking Lunges', sets: 3, reps: '12 each', rest: 90, muscle: 'Quads' },
                    { id: 'legs2e6', name: 'Seated Calf Raise', sets: 4, reps: '15-20', rest: 60, muscle: 'Calves' },
                    { id: 'legs2e7', name: 'Hanging Leg Raise', sets: 3, reps: '12-15', rest: 60, muscle: 'Core' }
                ]
            }
        }
    },
    broSplit: {
        name: 'Bro Split',
        description: '5 days: Chest, Back, Shoulders, Arms, Legs',
        icon: '💯',
        workouts: {
            chest: {
                id: 'chest',
                name: 'Chest Day',
                subtitle: 'Chest Focus',
                color: 'bg-red-500',
                exercises: [
                    { id: 'cheste1', name: 'Barbell Bench Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Chest' },
                    { id: 'cheste2', name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', rest: 120, muscle: 'Chest' },
                    { id: 'cheste3', name: 'Dumbbell Flyes', sets: 3, reps: '10-12', rest: 90, muscle: 'Chest' },
                    { id: 'cheste4', name: 'Cable Crossover', sets: 3, reps: '12-15', rest: 90, muscle: 'Chest' },
                    { id: 'cheste5', name: 'Decline Press', sets: 3, reps: '10-12', rest: 90, muscle: 'Chest' },
                    { id: 'cheste6', name: 'Push-ups', sets: 3, reps: 'To Failure', rest: 60, muscle: 'Chest' }
                ]
            },
            back: {
                id: 'back',
                name: 'Back Day',
                subtitle: 'Back & Traps',
                color: 'bg-blue-500',
                exercises: [
                    { id: 'backe1', name: 'Deadlift', sets: 4, reps: '5-6', rest: 180, muscle: 'Back' },
                    { id: 'backe2', name: 'Pull-ups', sets: 4, reps: '6-10', rest: 180, muscle: 'Back' },
                    { id: 'backe3', name: 'Barbell Row', sets: 4, reps: '8-10', rest: 120, muscle: 'Back' },
                    { id: 'backe4', name: 'Lat Pulldown', sets: 3, reps: '10-12', rest: 90, muscle: 'Back' },
                    { id: 'backe5', name: 'Cable Row', sets: 3, reps: '10-12', rest: 90, muscle: 'Back' },
                    { id: 'backe6', name: 'Face Pulls', sets: 3, reps: '15-20', rest: 60, muscle: 'Rear Delts' },
                    { id: 'backe7', name: 'Shrugs', sets: 4, reps: '12-15', rest: 60, muscle: 'Traps' }
                ]
            },
            shoulders: {
                id: 'shoulders',
                name: 'Shoulder Day',
                subtitle: 'Shoulders & Abs',
                color: 'bg-yellow-500',
                exercises: [
                    { id: 'shoulderse1', name: 'Overhead Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Shoulders' },
                    { id: 'shoulderse2', name: 'Dumbbell Shoulder Press', sets: 4, reps: '8-10', rest: 120, muscle: 'Shoulders' },
                    { id: 'shoulderse3', name: 'Lateral Raises', sets: 4, reps: '12-15', rest: 90, muscle: 'Shoulders' },
                    { id: 'shoulderse4', name: 'Front Raises', sets: 3, reps: '12-15', rest: 90, muscle: 'Shoulders' },
                    { id: 'shoulderse5', name: 'Reverse Flyes', sets: 3, reps: '12-15', rest: 60, muscle: 'Rear Delts' },
                    { id: 'shoulderse6', name: 'Cable Crunch', sets: 3, reps: '15-20', rest: 60, muscle: 'Abs' },
                    { id: 'shoulderse7', name: 'Planks', sets: 3, reps: '60s', rest: 60, muscle: 'Core' }
                ]
            },
            arms: {
                id: 'arms',
                name: 'Arm Day',
                subtitle: 'Biceps & Triceps',
                color: 'bg-purple-500',
                exercises: [
                    { id: 'armse1', name: 'Barbell Curl', sets: 4, reps: '8-10', rest: 90, muscle: 'Biceps' },
                    { id: 'armse2', name: 'Close-Grip Bench Press', sets: 4, reps: '8-10', rest: 90, muscle: 'Triceps' },
                    { id: 'armse3', name: 'Hammer Curls', sets: 3, reps: '10-12', rest: 90, muscle: 'Biceps' },
                    { id: 'armse4', name: 'Tricep Dips', sets: 3, reps: '10-12', rest: 90, muscle: 'Triceps' },
                    { id: 'armse5', name: 'Preacher Curl', sets: 3, reps: '10-12', rest: 60, muscle: 'Biceps' },
                    { id: 'armse6', name: 'Overhead Tricep Extension', sets: 3, reps: '10-12', rest: 60, muscle: 'Triceps' },
                    { id: 'armse7', name: 'Cable Curl', sets: 3, reps: '12-15', rest: 60, muscle: 'Biceps' },
                    { id: 'armse8', name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: 60, muscle: 'Triceps' }
                ]
            },
            legs: {
                id: 'legs',
                name: 'Leg Day',
                subtitle: 'Legs & Calves',
                color: 'bg-green-500',
                exercises: [
                    { id: 'legse1', name: 'Squat', sets: 4, reps: '6-8', rest: 180, muscle: 'Quads' },
                    { id: 'legse2', name: 'Romanian Deadlift', sets: 4, reps: '8-10', rest: 180, muscle: 'Hamstrings' },
                    { id: 'legse3', name: 'Leg Press', sets: 3, reps: '10-12', rest: 120, muscle: 'Quads' },
                    { id: 'legse4', name: 'Leg Extension', sets: 3, reps: '12-15', rest: 90, muscle: 'Quads' },
                    { id: 'legse5', name: 'Leg Curl', sets: 3, reps: '12-15', rest: 90, muscle: 'Hamstrings' },
                    { id: 'legse6', name: 'Bulgarian Split Squat', sets: 3, reps: '10-12 each', rest: 90, muscle: 'Quads' },
                    { id: 'legse7', name: 'Standing Calf Raise', sets: 4, reps: '15-20', rest: 60, muscle: 'Calves' },
                    { id: 'legse8', name: 'Seated Calf Raise', sets: 4, reps: '15-20', rest: 60, muscle: 'Calves' }
                ]
            }
        }
    },
    fullBody: {
        name: 'Full Body',
        description: '3 days: Full body each session',
        icon: '🔥',
        workouts: {
            fullA: {
                id: 'fullA',
                name: 'Full Body A',
                subtitle: 'All Muscle Groups',
                color: 'bg-indigo-500',
                exercises: [
                    { id: 'fullAe1', name: 'Squat', sets: 4, reps: '6-8', rest: 180, muscle: 'Legs' },
                    { id: 'fullAe2', name: 'Bench Press', sets: 4, reps: '6-8', rest: 180, muscle: 'Chest' },
                    { id: 'fullAe3', name: 'Barbell Row', sets: 3, reps: '8-10', rest: 120, muscle: 'Back' },
                    { id: 'fullAe4', name: 'Overhead Press', sets: 3, reps: '8-10', rest: 120, muscle: 'Shoulders' },
                    { id: 'fullAe5', name: 'Romanian Deadlift', sets: 3, reps: '8-10', rest: 120, muscle: 'Hamstrings' },
                    { id: 'fullAe6', name: 'Barbell Curl', sets: 3, reps: '10-12', rest: 60, muscle: 'Biceps' },
                    { id: 'fullAe7', name: 'Tricep Dips', sets: 3, reps: '10-12', rest: 60, muscle: 'Triceps' }
                ]
            },
            fullB: {
                id: 'fullB',
                name: 'Full Body B',
                subtitle: 'All Muscle Groups',
                color: 'bg-teal-500',
                exercises: [
                    { id: 'fullBe1', name: 'Deadlift', sets: 4, reps: '5-6', rest: 180, muscle: 'Back/Legs' },
                    { id: 'fullBe2', name: 'Incline Dumbbell Press', sets: 4, reps: '8-10', rest: 120, muscle: 'Chest' },
                    { id: 'fullBe3', name: 'Pull-ups', sets: 3, reps: '6-10', rest: 120, muscle: 'Back' },
                    { id: 'fullBe4', name: 'Dumbbell Shoulder Press', sets: 3, reps: '8-10', rest: 120, muscle: 'Shoulders' },
                    { id: 'fullBe5', name: 'Leg Press', sets: 3, reps: '10-12', rest: 120, muscle: 'Legs' },
                    { id: 'fullBe6', name: 'Hammer Curls', sets: 3, reps: '10-12', rest: 60, muscle: 'Biceps' },
                    { id: 'fullBe7', name: 'Overhead Tricep Extension', sets: 3, reps: '10-12', rest: 60, muscle: 'Triceps' }
                ]
            },
            fullC: {
                id: 'fullC',
                name: 'Full Body C',
                subtitle: 'All Muscle Groups',
                color: 'bg-cyan-500',
                exercises: [
                    { id: 'fullCe1', name: 'Front Squat', sets: 4, reps: '8-10', rest: 180, muscle: 'Legs' },
                    { id: 'fullCe2', name: 'Dumbbell Bench Press', sets: 4, reps: '8-10', rest: 120, muscle: 'Chest' },
                    { id: 'fullCe3', name: 'Cable Row', sets: 3, reps: '10-12', rest: 120, muscle: 'Back' },
                    { id: 'fullCe4', name: 'Lateral Raises', sets: 3, reps: '12-15', rest: 90, muscle: 'Shoulders' },
                    { id: 'fullCe5', name: 'Leg Curl', sets: 3, reps: '10-12', rest: 90, muscle: 'Hamstrings' },
                    { id: 'fullCe6', name: 'Cable Curl', sets: 3, reps: '12-15', rest: 60, muscle: 'Biceps' },
                    { id: 'fullCe7', name: 'Triccep Pushdown', sets: 3, reps: '12-15', rest: 60, muscle: 'Triceps' }
                ]
            }
        }
    },
    empty: {
        name: 'Start Empty',
        description: 'Build your own custom program',
        icon: '✨',
        workouts: {}
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
        this.showOnboarding = false;
        this.currentPage = 'home'; // Navigation state: 'home', 'exercises', 'lastSessions', 'myWorkouts'
        this.currentProgramId = null; // Track which program is currently active
        this.viewingProgramId = null; // Track which program's sessions we're viewing
        this.viewingProgramHistory = null; // Temporary history for viewing another program's sessions
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
            if (!this.currentProgramId) return; // Don't save if no program is selected
            
            // Load all programs
            const allPrograms = this.getAllPrograms();
            
            // Update current program
            allPrograms[this.currentProgramId] = {
                name: this.getProgramName(),
                workouts: this.workouts,
                workoutOrder: this.workoutOrder,
                history: this.workoutHistory,
                updatedAt: new Date().toISOString(),
                createdAt: allPrograms[this.currentProgramId]?.createdAt || new Date().toISOString()
            };
            
            // Save all programs
            localStorage.setItem('gymPrograms', JSON.stringify(allPrograms));
            localStorage.setItem('currentProgramId', this.currentProgramId);
            
            // Legacy support - also save to old keys for backward compatibility
            localStorage.setItem('gymWorkouts', JSON.stringify(this.workouts));
            localStorage.setItem('gymHistory', JSON.stringify(this.workoutHistory));
            localStorage.setItem('programSelected', 'true');
            this.saveWorkoutOrder();
        } catch (error) {
            console.error('Failed to save:', error);
            alert('Failed to save data. Your browser may be out of storage space.');
        }
    }
    
    getAllPrograms() {
        try {
            const saved = localStorage.getItem('gymPrograms');
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error('Failed to load programs:', error);
            return {};
        }
    }
    
    getProgramName() {
        // Try to get program name from template or generate one
        const programTemplatesKeys = Object.keys(programTemplates);
        for (const key of programTemplatesKeys) {
            if (JSON.stringify(this.workouts) === JSON.stringify(programTemplates[key].workouts)) {
                return programTemplates[key].name;
            }
        }
        return 'Custom Program';
    }

    load() {
        try {
            // Try to load current program ID
            const savedProgramId = localStorage.getItem('currentProgramId');
            const allPrograms = this.getAllPrograms();
            
            // Check if we have saved programs
            if (savedProgramId && allPrograms[savedProgramId]) {
                // Load the saved program
                const program = allPrograms[savedProgramId];
                this.currentProgramId = savedProgramId;
                this.workouts = program.workouts || {};
                this.workoutOrder = program.workoutOrder || Object.keys(this.workouts);
                this.workoutHistory = program.history || [];
            } else {
                // Legacy support - try old format
                const savedWorkouts = localStorage.getItem('gymWorkouts');
                const savedHistory = localStorage.getItem('gymHistory');
                const programSelected = localStorage.getItem('programSelected');
                const savedOrder = localStorage.getItem('gymWorkoutOrder');

                this.workoutHistory = savedHistory ? JSON.parse(savedHistory) : [];
                this.workoutOrder = savedOrder ? JSON.parse(savedOrder) : null;

                if (!programSelected) {
                    this.showOnboarding = true;
                    this.workouts = {};
                    this.currentProgramId = null;
                } else {
                    this.workouts = savedWorkouts ? JSON.parse(savedWorkouts) : programTemplates.upperLower.workouts;
                    // Migrate old data to new format
                    if (savedWorkouts && !this.currentProgramId) {
                        this.currentProgramId = 'legacy-' + Date.now();
                        this.save();
                    }
                }
            }
        } catch (error) {
            console.error('Failed to load:', error);
            this.workouts = {};
            this.workoutHistory = [];
            this.showOnboarding = true;
            this.currentProgramId = null;
        }
    }
    
    loadProgram(programId) {
        const allPrograms = this.getAllPrograms();
        if (allPrograms[programId]) {
            const program = allPrograms[programId];
            this.currentProgramId = programId;
            this.workouts = program.workouts || {};
            this.workoutOrder = program.workoutOrder || Object.keys(this.workouts);
            this.workoutHistory = program.history || [];
            this.currentPage = 'exercises';
            this.save();
            this.render();
        }
    }
    
    deleteProgram(programId) {
        if (confirm('Delete this program? All workouts and history will be lost.')) {
            const allPrograms = this.getAllPrograms();
            delete allPrograms[programId];
            localStorage.setItem('gymPrograms', JSON.stringify(allPrograms));
            
            // If deleting current program, switch to another or show onboarding
            if (this.currentProgramId === programId) {
                const remainingPrograms = Object.keys(allPrograms);
                if (remainingPrograms.length > 0) {
                    this.loadProgram(remainingPrograms[0]);
                } else {
                    this.currentProgramId = null;
                    this.workouts = {};
                    this.workoutHistory = [];
                    this.showOnboarding = true;
                    localStorage.removeItem('currentProgramId');
                    this.render();
                }
            } else {
                this.render();
            }
        }
    }

    getWorkoutOrder() {
        if (this.workoutOrder && Array.isArray(this.workoutOrder)) {
            return this.workoutOrder.filter(id => this.workouts[id]);
        }
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

    selectProgram(programKey) {
        const template = programTemplates[programKey];
        this.workouts = JSON.parse(JSON.stringify(template.workouts));
        this.workoutOrder = Object.keys(this.workouts);
        this.workoutHistory = []; // Start fresh history for new program
        
        // Create a unique program ID
        this.currentProgramId = 'program-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
        
        this.showOnboarding = false;
        this.currentPage = 'exercises'; // Navigate to exercises page after program selection
        this.save();
        this.render();
    }

    startWorkout(workoutId) {
        this.currentWorkout = this.workouts[workoutId];
        this.workoutSession = { 
            startTime: new Date().toISOString(), 
            workoutId: workoutId, 
            exercises: {} 
        };
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
        // Don't show nav bar for onboarding, modals, or detail views
        const showNavBar = !this.showOnboarding && 
                          !this.viewingHistory && 
                          !this.creatingNewWorkout && 
                          !this.editingWorkoutHeader && 
                          !this.editingExercise && 
                          !this.activeExercise && 
                          !this.currentWorkout;

        if (this.showOnboarding) {
            app.innerHTML = this.renderOnboarding();
        } else if (this.viewingHistory) {
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
            // Handle page navigation
            let pageContent = '';
            if (this.currentPage === 'exercises') {
                pageContent = this.renderExercises();
            } else if (this.currentPage === 'lastSessions') {
                pageContent = this.renderLastSessions();
            } else if (this.currentPage === 'myWorkouts') {
                pageContent = this.renderMyWorkouts();
            } else {
                pageContent = this.renderHome();
            }
            app.innerHTML = pageContent + (showNavBar ? this.renderNavigationBar() : '');
        }
    }

    setupEventDelegation() {
        const app = document.getElementById('app');
        app.addEventListener('click', (e) => {
            if (e.target.closest('.delete-history-btn')) {
                e.stopPropagation();
                // Don't allow deleting when viewing another program's sessions
                if (this.viewingProgramId) return;
                const button = e.target.closest('.delete-history-btn');
                const index = parseInt(button.getAttribute('data-index'));
                this.workoutHistory.splice(index, 1);
                this.save();
                this.render();
            } else if (e.target.closest('.view-history-btn')) {
                const button = e.target.closest('.view-history-btn');
                const index = parseInt(button.getAttribute('data-index'));
                this.viewHistory(index);
            }
        });
    }

    renderOnboarding() {
        const programs = Object.entries(programTemplates).map(([key, program]) => `
            <button onclick="app.selectProgram('${key}')" 
                class="program-card bg-slate-800 rounded-2xl p-6 text-left border-2 border-slate-700 hover:border-blue-500 transition-all animate-slide-up">
                <div class="text-5xl mb-3">${program.icon}</div>
                <h3 class="text-2xl font-black mb-2">${program.name}</h3>
                <p class="text-slate-400 text-sm">${program.description}</p>
            </button>
        `).join('');

        return `
            <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex items-center justify-center">
                <div class="max-w-2xl w-full">
                    <div class="text-center mb-12 animate-fade-in">
                        <div class="text-6xl mb-4">🏋️</div>
                        <h1 class="text-4xl font-black mb-3">Welcome to Gym Tracker</h1>
                        <p class="text-slate-400 text-lg">Choose your training program to get started</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${programs}
                    </div>
                </div>
            </div>
        `;
    }

    renderHome() {
        const workoutOrder = this.getWorkoutOrder();
        const workoutCards = workoutOrder.map((workoutId, index) => {
            const workout = this.workouts[workoutId];
            if (!workout) return '';

            return `
                <div draggable="${this.editMode ? 'true' : 'false'}" 
                    data-workout-id="${workout.id}"
                    data-workout-index="${index}"
                    class="workout-card bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 mb-4 transition-all"
                    ${this.editMode ? `ondragstart="return app.handleDragStart(event, '${workout.id}')" ondragend="app.handleDragEnd(event)" ondragover="app.handleDragOver(event, ${index})" ondragleave="app.handleDragLeave(event)" ondrop="app.handleDrop(event, ${index})"` : ''}>
                    <div class="p-5 flex items-center justify-between">
                        <div class="flex items-center gap-3 flex-1">
                            ${this.editMode ? '<div class="cursor-move text-slate-500 text-2xl">☰</div>' : ''}
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

        return `
            <div class="min-h-screen pb-20 animate-fade-in">
                <div class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 pb-12 rounded-b-[2rem] shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h1 class="text-3xl font-black tracking-tight">Gym Tracker</h1>
                        <div class="flex items-center gap-2">
                            <button onclick="app.showMenu = !app.showMenu; app.render()" class="bg-white/10 p-2 rounded-lg" aria-label="Settings menu">ghalat ⚙️</button>
                        </div>
                    </div>
                    <p class="text-blue-100 font-medium">Ready for your session, Gymbro?</p>
                </div>
                ${this.showMenu ? `<div class="p-4 -mt-6">
                    <button onclick="app.editMode = !app.editMode; app.showMenu = false; app.render()" class="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl font-black">${this.editMode ? 'Finish Customizing' : 'Customize Workouts'}</button>
                </div>` : '<div class="h-6"></div>'}
                <div class="px-4">
                    ${workoutCards}
                    ${this.editMode ? `<button onclick="app.creatingNewWorkout = true; app.render()" class="w-full bg-blue-600/20 text-blue-400 p-4 rounded-xl font-bold mb-4">+ Create New Workout</button>` : ''}
                </div>
            </div>`;
    }

    renderNavigationBar() {
        return `
            <nav class="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700/50 safe-area-inset-bottom z-40">
                <div class="flex items-center justify-around px-2 py-2">
                    <button onclick="if(confirm('Switch program? Your current workouts will be replaced.')) { app.showOnboarding = true; localStorage.removeItem('programSelected'); app.render(); }" 
                        class="nav-btn flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${this.currentPage === 'home' ? 'text-blue-400 bg-blue-500/10' : 'text-slate-500 hover:text-slate-300'}">
                        <span class="text-2xl">🏠</span>
                        <span class="text-xs font-bold uppercase">Home</span>
                    </button>
                    <button onclick="app.currentPage = 'exercises'; app.render()" 
                        class="nav-btn flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${this.currentPage === 'exercises' ? 'text-blue-400 bg-blue-500/10' : 'text-slate-500 hover:text-slate-300'}">
                        <span class="text-2xl">💪</span>
                        <span class="text-xs font-bold uppercase">Exercises</span>
                    </button>
                    <button onclick="app.currentPage = 'myWorkouts'; app.render()" 
                        class="nav-btn flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${this.currentPage === 'myWorkouts' ? 'text-blue-400 bg-blue-500/10' : 'text-slate-500 hover:text-slate-300'}">
                        <span class="text-2xl">📋</span>
                        <span class="text-xs font-bold uppercase">My Workouts</span>
                    </button>
                </div>
            </nav>`;
    }

    renderExercises() {
        // Show workout sessions (same as home page)
        const workoutOrder = this.getWorkoutOrder();
        const workoutCards = workoutOrder.map((workoutId, index) => {
            const workout = this.workouts[workoutId];
            if (!workout) return '';

            return `
                <div draggable="${this.editMode ? 'true' : 'false'}" 
                    data-workout-id="${workout.id}"
                    data-workout-index="${index}"
                    class="workout-card bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 mb-4 transition-all"
                    ${this.editMode ? `ondragstart="return app.handleDragStart(event, '${workout.id}')" ondragend="app.handleDragEnd(event)" ondragover="app.handleDragOver(event, ${index})" ondragleave="app.handleDragLeave(event)" ondrop="app.handleDrop(event, ${index})"` : ''}>
                    <div class="p-5 flex items-center justify-between">
                        <div class="flex items-center gap-3 flex-1">
                            ${this.editMode ? '<div class="cursor-move text-slate-500 text-2xl">☰</div>' : ''}
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

        return `
            <div class="min-h-screen pb-20 animate-fade-in">
                <div class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 pb-12 rounded-b-[2rem] shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h1 class="text-3xl font-black tracking-tight">Gym Tracker</h1>
                        <div class="flex items-center gap-2">
                            <button onclick="app.showMenu = !app.showMenu; app.render()" class="bg-white/10 p-2 rounded-lg" aria-label="Settings menu">Customize⚙️</button>
                        </div>
                    </div>
                    <p class="text-blue-100 font-medium">Ready for your session, Gymbro?</p>
                </div>
                ${this.showMenu ? `<div class="p-4 -mt-6">
                    <button onclick="app.editMode = !app.editMode; app.showMenu = false; app.render()" class="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl font-black">${this.editMode ? 'Finish Customizing' : 'Customize Workouts'}</button>
                </div>` : '<div class="h-6"></div>'}
                <div class="px-4">
                    ${workoutCards}
                    ${this.editMode ? `<button onclick="app.creatingNewWorkout = true; app.render()" class="w-full bg-blue-600/20 text-blue-400 p-4 rounded-xl font-bold mb-4">+ Create New Workout</button>` : ''}
                </div>
            </div>`;
    }

    renderLastSessions() {
        // Use viewing program history if viewing another program's sessions
        const historyToShow = this.viewingProgramHistory || this.workoutHistory;
        const programName = this.viewingProgramId ? this.getAllPrograms()[this.viewingProgramId]?.name : null;
        
        const historyHTML = historyToShow.length > 0 ? `
            <div class="space-y-3">
                ${historyToShow.map((w, index) => `
                    <div class="bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
                        <button class="view-history-btn w-full p-4 flex justify-between items-center text-left hover:bg-slate-800 transition-all" data-index="${index}">
                            <div class="flex-1">
                                <div class="font-bold text-lg">${w.workoutName}</div>
                                <div class="text-slate-500 text-sm mt-1">${new Date(w.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                <div class="text-slate-400 text-xs mt-2">${Object.keys(w.exercises).length} exercise${Object.keys(w.exercises).length !== 1 ? 's' : ''}</div>
                            </div>
                            <div class="text-slate-600 text-2xl ml-4">→</div>
                        </button>
                        ${!this.viewingProgramId ? `<button class="delete-history-btn w-full bg-red-500/10 text-red-400 py-2 text-xs font-bold uppercase hover:bg-red-500/20 transition-all border-t border-slate-700/50" data-index="${index}">Delete</button>` : ''}
                    </div>
                `).join('')}
            </div>
        ` : `
            <div class="text-center py-12">
                <div class="text-6xl mb-4">📊</div>
                <p class="text-slate-400 text-lg">No workout sessions yet</p>
                <p class="text-slate-500 text-sm mt-2">Complete a workout to see your history here</p>
            </div>
        `;

        return `
            <div class="min-h-screen pb-20 animate-fade-in">
                <div class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 pb-12 rounded-b-[2rem] shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h1 class="text-3xl font-black tracking-tight">${programName ? programName + ' Sessions' : 'Last Sessions'}</h1>
                            ${programName ? `<button onclick="app.viewingProgramId = null; app.viewingProgramHistory = null; app.currentPage = 'myWorkouts'; app.render()" class="mt-2 text-blue-100 text-sm font-bold uppercase">← Back to My Workouts</button>` : ''}
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="app.showMenu = !app.showMenu; app.render()" class="bg-white/10 p-2 rounded-lg" aria-label="Settings menu">Customize⚙️</button>
                        </div>
                    </div>
                    <p class="text-blue-100 font-medium">${historyToShow.length} session${historyToShow.length !== 1 ? 's' : ''} recorded</p>
                </div>
                ${this.showMenu ? `<div class="p-4 -mt-6">
                    <button onclick="app.editMode = !app.editMode; app.showMenu = false; app.currentPage = 'home'; app.render()" class="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl font-black">${this.editMode ? 'Finish Customizing' : 'Customize Workouts'}</button>
                </div>` : '<div class="h-6"></div>'}
                <div class="px-4">
                    ${historyHTML}
                </div>
            </div>`;
    }

    renderMyWorkouts() {
        const allPrograms = this.getAllPrograms();
        const programIds = Object.keys(allPrograms);
        
        const programsHTML = programIds.length > 0 ? programIds.map(programId => {
            const program = allPrograms[programId];
            const workoutCount = Object.keys(program.workouts || {}).length;
            const sessionCount = (program.history || []).length;
            const isCurrent = this.currentProgramId === programId;
            const updatedDate = program.updatedAt ? new Date(program.updatedAt).toLocaleDateString() : 'Unknown';
            
            return `
                <div class="bg-slate-800 rounded-xl border ${isCurrent ? 'border-blue-500' : 'border-slate-700/50'} overflow-hidden mb-4 shadow-lg">
                    <div class="p-5">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-2">
                                    <h3 class="text-xl font-bold">${program.name || 'Unnamed Program'}</h3>
                                    ${isCurrent ? '<span class="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-bold uppercase">Current</span>' : ''}
                                </div>
                                <div class="text-slate-400 text-sm space-y-1">
                                    <div>${workoutCount} workout${workoutCount !== 1 ? 's' : ''}</div>
                                    <div>${sessionCount} session${sessionCount !== 1 ? 's' : ''} recorded</div>
                                    <div class="text-slate-500 text-xs mt-2">Last updated: ${updatedDate}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2 mt-4">
                            ${!isCurrent ? `
                                <button onclick="app.loadProgram('${programId}')" class="flex-1 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-blue-600/30 transition-all">Load Program</button>
                            ` : `
                                <button onclick="app.currentPage = 'exercises'; app.render()" class="flex-1 bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-green-600/30 transition-all">View Workouts</button>
                            `}
                            <button onclick="app.viewProgramSessions('${programId}')" class="flex-1 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-purple-600/30 transition-all">Sessions</button>
                            <button onclick="app.deleteProgram('${programId}')" class="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-red-600/30 transition-all">Delete</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('') : `
            <div class="text-center py-12">
                <div class="text-6xl mb-4">📋</div>
                <p class="text-slate-400 text-lg">No saved programs yet</p>
                <p class="text-slate-500 text-sm mt-2">Select a program template to get started</p>
            </div>
        `;

        return `
            <div class="min-h-screen pb-20 animate-fade-in">
                <div class="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 pb-12 rounded-b-[2rem] shadow-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h1 class="text-3xl font-black tracking-tight">My Workouts</h1>
                        <div class="flex items-center gap-2">
                            <button onclick="app.showMenu = !app.showMenu; app.render()" class="bg-white/10 p-2 rounded-lg" aria-label="Settings menu">⚙️</button>
                        </div>
                    </div>
                    <p class="text-blue-100 font-medium">${programIds.length} program${programIds.length !== 1 ? 's' : ''} saved</p>
                </div>
                ${this.showMenu ? `<div class="p-4 -mt-6">
                    <button onclick="app.editMode = !app.editMode; app.showMenu = false; app.currentPage = 'home'; app.render()" class="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl font-black">${this.editMode ? 'Finish Customizing' : 'Customize Workouts'}</button>
                </div>` : '<div class="h-6"></div>'}
                <div class="px-4">
                    ${programsHTML}
                </div>
            </div>`;
    }
    
    viewProgramSessions(programId) {
        const allPrograms = this.getAllPrograms();
        if (allPrograms[programId]) {
            const program = allPrograms[programId];
            const history = program.history || [];
            
            // Store original state
            this.viewingProgramId = programId;
            this.viewingProgramHistory = history;
            this.currentPage = 'lastSessions';
            this.render();
        }
    }

    renderEditExercises(workout) {
        return `<div class="p-4 bg-slate-900/80 space-y-2 border-t border-slate-700/50">
            ${workout.exercises.map((ex, index) => `
                <div draggable="true"
                    data-exercise-id="${ex.id}"
                    data-exercise-index="${index}"
                    data-workout-id="${workout.id}"
                    class="exercise-card flex items-center justify-between bg-slate-800 p-3 rounded-lg border border-slate-700 transition-all"
                    ondragstart="return app.handleExerciseDragStart(event, '${workout.id}', '${ex.id}')"
                    ondragend="app.handleExerciseDragEnd(event)"
                    ondragover="app.handleExerciseDragOver(event, '${workout.id}', ${index})"
                    ondragleave="app.handleExerciseDragLeave(event)"
                    ondrop="app.handleExerciseDrop(event, '${workout.id}', ${index})">
                    <div class="flex items-center gap-3">
                        <div class="cursor-move text-slate-500 text-lg">☰</div>
                        <div>
                            <div class="text-white font-bold text-sm">${ex.name}</div>
                            <div class="text-slate-400 text-xs">${ex.sets} sets • ${ex.reps}</div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="app.editingExercise = { workoutId: '${workout.id}', exercise: ${JSON.stringify(ex).replace(/"/g, '&quot;')} }; app.render()" class="bg-blue-500/10 text-blue-400 p-2 rounded text-xs font-bold uppercase">Edit</button>
                        <button onclick="app.deleteExercise('${workout.id}', '${ex.id}')" class="bg-red-500/10 text-red-400 p-2 rounded text-xs font-bold uppercase">✕</button>
                    </div>
                </div>`).join('')}
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
            { value: 'bg-pink-500', label: 'Pink' }
        ];

        return `<div class="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50 animate-fade-in">
            <div class="bg-slate-800 p-6 rounded-3xl w-full max-w-md border border-slate-700">
                <h2 class="text-xl font-black mb-6 uppercase">Create New Workout</h2>
                <input id="newWorkoutName" type="text" class="w-full bg-slate-900 p-4 rounded-xl mb-4 border border-slate-700 outline-none" placeholder="Workout Name">
                <input id="newWorkoutSubtitle" type="text" class="w-full bg-slate-900 p-4 rounded-xl mb-6 border border-slate-700 outline-none" placeholder="Subtitle">
                <div class="mb-6">
                    <label class="block text-sm font-bold text-slate-400 uppercase mb-3">Color</label>
                    <div class="grid grid-cols-3 gap-2">
                        ${colors.map(c => `<label class="flex items-center gap-2 p-2 rounded border border-slate-700 cursor-pointer hover:bg-slate-700/50">
                            <input type="radio" name="color" value="${c.value}" ${c.value === 'bg-blue-500' ? 'checked' : ''}>
                            <div class="${c.value} w-6 h-6 rounded"></div>
                            <span class="text-xs">${c.label}</span>
                        </label>`).join('')}
                    </div>
                </div>
                <button onclick="app.saveNewWorkout()" class="w-full bg-blue-600 p-4 rounded-xl font-black mb-2 uppercase">Create</button>
                <button onclick="app.creatingNewWorkout = false; app.render()" class="w-full text-slate-500 font-bold py-2">Cancel</button>
            </div>
        </div>`;
    }

    renderWorkoutHeaderEdit() {
        const w = this.workouts[this.editingWorkoutHeader];
        return `<div class="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50 animate-fade-in">
            <div class="bg-slate-800 p-6 rounded-3xl w-full max-w-md border border-slate-700">
                <h2 class="text-xl font-black mb-6 uppercase">Rename Workout</h2>
                <input id="hName" type="text" value="${w.name}" class="w-full bg-slate-900 p-4 rounded-xl mb-4 border border-slate-700 outline-none">
                <input id="hSub" type="text" value="${w.subtitle}" class="w-full bg-slate-900 p-4 rounded-xl mb-6 border border-slate-700 outline-none">
                <button onclick="app.saveWorkoutHeader()" class="w-full bg-blue-600 p-4 rounded-xl font-black mb-2">Save</button>
                <button onclick="app.editingWorkoutHeader = null; app.render()" class="w-full text-slate-500 font-bold py-2">Cancel</button>
            </div>
        </div>`;
    }

    renderWorkoutList() {
        const exerciseCards = this.currentWorkout.exercises.map(exercise => {
            const sessionData = this.workoutSession.exercises[exercise.id];
            const isComplete = sessionData?.completed || false;

            return `<div class="w-full bg-slate-800 rounded-xl p-4 flex items-center gap-4 mb-3 border border-slate-700/50">
                <button onclick="app.activeExercise = ${JSON.stringify(exercise).replace(/"/g, '&quot;')}; app.render()" class="flex-1 text-left">
                    <h3 class="font-bold text-lg">${exercise.name}</h3>
                    <div class="text-[10px] font-bold text-slate-500 uppercase">${exercise.sets} SETS • ${exercise.reps} REPS</div>
                </button>
                <button onclick="app.toggleExerciseQuick('${exercise.id}', event)" class="text-3xl">${isComplete ? '✅' : '⚪'}</button>
            </div>`;
        }).join('');

        return `<div class="min-h-screen pb-24 animate-fade-in">
            <div class="${this.currentWorkout.color} p-6 rounded-b-2xl mb-4 shadow-xl">
                <button onclick="app.currentWorkout = null; app.render()" class="mb-4 bg-black/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">← back</button>
                <h1 class="text-2xl font-black uppercase tracking-tight">${this.currentWorkout.name}</h1>
                <p class="text-white/80 text-sm font-medium">${this.currentWorkout.subtitle}</p>
            </div>
            <div class="px-4">${exerciseCards}</div>
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-lg border-t border-slate-800">
                <button onclick="app.finishWorkout()" class="w-full bg-green-600 py-4 rounded-2xl font-black shadow-lg uppercase">Finish Session</button>
            </div>
        </div>`;
    }

    renderExerciseDetail() {
        const sessionData = this.workoutSession.exercises[this.activeExercise.id] || { 
            sets: Array(this.activeExercise.sets).fill().map(() => ({ weight: '', reps: '' })),
            notes: ''
        };

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
                <div class="flex items-center gap-2 sm:gap-3">
                    <input type="number" id="weight-${i}" value="${sessionData.sets[i]?.weight || ''}" placeholder="Weight (kg)"
                        class="weight-input bg-slate-900 text-white text-xl font-black p-2 sm:p-3 rounded-lg border border-slate-700 outline-none">
                    <div class="text-slate-600 text-xl sm:text-2xl px-1">×</div>
                    <input type="number" id="reps-${i}" value="${sessionData.sets[i]?.reps || ''}" placeholder="Reps"
                        class="reps-input bg-slate-900 text-white text-xl font-black p-2 sm:p-3 rounded-lg border border-slate-700 outline-none">
                </div>
            </div>
        `).join('');

        return `<div class="min-h-screen p-6 pb-32 animate-fade-in">
            <button onclick="app.activeExercise = null; app.render()" class="mb-6 font-bold text-slate-400 uppercase text-xs tracking-widest">← Back</button>
            <h1 class="text-3xl font-black mb-2">${this.activeExercise.name}</h1>
            <p class="text-slate-500 font-bold mb-8 uppercase tracking-widest text-sm">${this.activeExercise.sets} Sets</p>
            ${lastSessionHTML}
            <div class="space-y-3 mb-6">${setsHTML}</div>
            <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <label class="block text-[10px] font-black text-slate-500 uppercase mb-2">Notes</label>
                <textarea id="notesInput" placeholder="How did it feel?" class="w-full bg-slate-900 p-4 rounded-xl border border-slate-700 h-24 outline-none resize-none">${sessionData.notes || ''}</textarea>
            </div>
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800">
                <button onclick="app.saveExerciseWithSets()" class="w-full bg-blue-600 py-5 rounded-2xl font-black text-xl shadow-xl uppercase">Done</button>
            </div>
        </div>`;
    }

    renderExerciseEdit() {
        const ex = this.editingExercise.exercise;
        return `<div class="fixed inset-0 bg-black flex items-center justify-center p-6 z-50 animate-fade-in">
            <div class="bg-slate-800 p-6 rounded-3xl w-full max-w-md border border-slate-700">
                <h2 class="text-xl font-black mb-6 uppercase">Edit Exercise</h2>
                <input id="editExName" type="text" value="${ex.name}" class="w-full bg-slate-900 p-4 rounded-xl mb-4 border border-slate-700 outline-none">
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div><label class="text-[10px] font-bold text-slate-500">SETS</label><input type="number" id="editExSets" value="${ex.sets}" class="w-full bg-slate-900 p-4 rounded-xl border border-slate-700 outline-none"></div>
                    <div><label class="text-[10px] font-bold text-slate-500">REPS</label><input type="text" id="editExReps" value="${ex.reps}" class="w-full bg-slate-900 p-4 rounded-xl border border-slate-700 outline-none"></div>
                </div>
                <button onclick="app.saveExEdit()" class="w-full bg-blue-600 p-4 rounded-xl font-black mb-2 uppercase">Update</button>
                <button onclick="app.editingExercise = null; app.render()" class="w-full text-slate-500 font-bold py-2">Cancel</button>
            </div>
        </div>`;
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
                    ` : '<div class="text-slate-500 text-sm">No data</div>'}
                    ${data.notes ? `<div class="text-slate-400 text-sm italic mt-2">"${data.notes}"</div>` : ''}
                </div>
            `;
        }).join('');

        return `
            <div class="min-h-screen pb-20 animate-fade-in">
                <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-6 pb-8 rounded-b-2xl shadow-xl mb-4">
                    <button onclick="app.viewingHistory = null; app.currentPage = app.viewingProgramId ? 'myWorkouts' : 'lastSessions'; if (app.viewingProgramId) { app.viewingProgramId = null; app.viewingProgramHistory = null; } app.render()" class="mb-4 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">← Back</button>
                    <h1 class="text-2xl font-black uppercase mb-2">${historyItem.workoutName}</h1>
                    <div class="text-slate-400 text-sm font-medium">${new Date(historyItem.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                </div>
                <div class="px-4 space-y-3">
                    ${Object.keys(historyItem.exercises).length > 0 ? exercisesList : '<div class="text-center text-slate-500 py-8">No exercises saved</div>'}
                </div>
            </div>
        `;
    }

    // Helper methods
    getDaysAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString();
    }

    findExerciseName(exerciseId) {
        for (let workout of Object.values(this.workouts)) {
            const ex = workout.exercises.find(e => e.id === exerciseId);
            if (ex) return ex.name;
        }
        return exerciseId;
    }

    getLastSessionData(exerciseId) {
        for (let history of this.workoutHistory) {
            if (history.exercises[exerciseId]) {
                return history.exercises[exerciseId];
            }
        }
        return null;
    }

    viewHistory(index) {
        // Use viewing program history if viewing another program's sessions
        const historyToUse = this.viewingProgramHistory || this.workoutHistory;
        if (historyToUse[index]) {
            this.viewingHistory = historyToUse[index].id;
            this.render();
        }
    }

    saveNewWorkout() {
        const name = document.getElementById('newWorkoutName').value.trim();
        const subtitle = document.getElementById('newWorkoutSubtitle').value.trim();
        const color = document.querySelector('input[name="color"]:checked')?.value || 'bg-blue-500';

        if (!name) return alert('Workout name cannot be empty');

        const newId = 'workout_' + Date.now();
        this.workouts[newId] = {
            id: newId,
            name: name,
            subtitle: subtitle || 'Custom Workout',
            color: color,
            exercises: []
        };

        this.save();
        this.creatingNewWorkout = false;
        this.render();
    }

    saveWorkoutHeader() {
        const w = this.workouts[this.editingWorkoutHeader];
        const name = document.getElementById('hName').value.trim();
        const subtitle = document.getElementById('hSub').value.trim();

        if (!name) return alert('Workout name cannot be empty');

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

        if (!name || !sets || !reps) return alert('All fields required');

        ex.name = name;
        ex.sets = sets;
        ex.reps = reps;
        this.save();
        this.editingExercise = null;
        this.render();
    }

    addExercise(workoutId) {
        this.workouts[workoutId].exercises.push({ 
            id: Date.now().toString(), 
            name: 'New Exercise', 
            sets: 3, 
            reps: '10', 
            muscle: 'Target' 
        });
        this.save();
        this.render();
    }

    deleteExercise(wId, eId) {
        if(confirm('Delete this exercise?')) {
            this.workouts[wId].exercises = this.workouts[wId].exercises.filter(e => e.id !== eId);
            this.save();
            this.render();
        }
    }

    deleteWorkout(workoutId) {
        if(confirm('Delete this workout?')) {
            delete this.workouts[workoutId];
            this.save();
            this.render();
        }
    }

    saveExerciseWithSets() {
        const sets = [];
        for (let i = 0; i < this.activeExercise.sets; i++) {
            const weightInput = document.getElementById(`weight-${i}`);
            const repsInput = document.getElementById(`reps-${i}`);
            sets.push({
                weight: weightInput ? weightInput.value : '',
                reps: repsInput ? repsInput.value : ''
            });
        }

        this.workoutSession.exercises[this.activeExercise.id] = {
            sets: sets,
            notes: document.getElementById('notesInput').value,
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

    // Drag and drop handlers for workouts
    handleDragStart(event, workoutId) {
        if (event.target.closest('button') && event.target.tagName !== 'DIV') {
            event.preventDefault();
            return false;
        }
        this.draggedWorkoutId = workoutId;
        event.dataTransfer.effectAllowed = 'move';
        event.currentTarget.classList.add('dragging');
        return true;
    }

    handleDragEnd(event) {
        event.currentTarget.classList.remove('dragging');
        document.querySelectorAll('.workout-card.drag-over').forEach(el => el.classList.remove('drag-over'));
        this.draggedWorkoutId = null;
        this.dragOverIndex = null;
    }

    handleDragOver(event, index) {
        event.preventDefault();
        event.stopPropagation();
        const currentOrder = this.getWorkoutOrder();
        if (this.draggedWorkoutId && this.draggedWorkoutId !== currentOrder[index]) {
            if (this.dragOverIndex !== index) {
                if (this.dragOverIndex !== null) {
                    const prevCard = document.querySelector(`[data-workout-index="${this.dragOverIndex}"]`);
                    if (prevCard) prevCard.classList.remove('drag-over');
                }
                event.currentTarget.classList.add('drag-over');
                this.dragOverIndex = index;
            }
        }
    }

    handleDragLeave(event) {
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

        event.currentTarget.classList.remove('drag-over');
        const currentOrder = this.getWorkoutOrder();
        const draggedIndex = currentOrder.indexOf(this.draggedWorkoutId);

        if (draggedIndex === -1) {
            this.draggedWorkoutId = null;
            this.render();
            return;
        }

        const newOrder = [...currentOrder];
        const [removed] = newOrder.splice(draggedIndex, 1);
        newOrder.splice(targetIndex, 0, removed);

        this.workoutOrder = newOrder;
        this.save();
        this.draggedWorkoutId = null;
        this.dragOverIndex = null;
        this.render();
    }

    // Drag and drop handlers for exercises
    handleExerciseDragStart(event, workoutId, exerciseId) {
        if (event.target.closest('button') && (event.target.textContent === 'Edit' || event.target.textContent === '✕')) {
            event.preventDefault();
            return false;
        }
        this.draggedExerciseId = exerciseId;
        this.draggedExerciseWorkoutId = workoutId;
        event.dataTransfer.effectAllowed = 'move';
        event.currentTarget.classList.add('dragging');
        return true;
    }

    handleExerciseDragEnd(event) {
        event.currentTarget.classList.remove('dragging');
        document.querySelectorAll('.exercise-card.drag-over').forEach(el => el.classList.remove('drag-over'));
        this.draggedExerciseId = null;
        this.draggedExerciseWorkoutId = null;
        this.dragOverExerciseIndex = null;
        this.dragOverExerciseWorkoutId = null;
    }

    handleExerciseDragOver(event, workoutId, index) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.draggedExerciseId) return;

        const targetExercise = this.workouts[workoutId]?.exercises[index];
        if (targetExercise?.id !== this.draggedExerciseId) {
            const newKey = `${workoutId}-${index}`;
            const currentKey = this.dragOverExerciseIndex !== null ? `${this.dragOverExerciseWorkoutId}-${this.dragOverExerciseIndex}` : null;

            if (newKey !== currentKey) {
                if (this.dragOverExerciseIndex !== null && this.dragOverExerciseWorkoutId) {
                    const prevExercise = document.querySelector(`[data-exercise-index="${this.dragOverExerciseIndex}"][data-workout-id="${this.dragOverExerciseWorkoutId}"]`);
                    if (prevExercise) prevExercise.classList.remove('drag-over');
                }
                event.currentTarget.classList.add('drag-over');
                this.dragOverExerciseIndex = index;
                this.dragOverExerciseWorkoutId = workoutId;
            }
        }
    }

    handleExerciseDragLeave(event) {
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

        event.currentTarget.classList.remove('drag-over');
        const targetWorkout = this.workouts[workoutId];
        const sourceWorkout = this.workouts[this.draggedExerciseWorkoutId];

        if (!targetWorkout || !sourceWorkout) return;

        const draggedExercise = sourceWorkout.exercises.find(ex => ex.id === this.draggedExerciseId);
        if (!draggedExercise) return;

        const draggedIndex = sourceWorkout.exercises.findIndex(ex => ex.id === this.draggedExerciseId);
        if (draggedIndex === -1) {
            this.draggedExerciseId = null;
            this.render();
            return;
        }

        if (this.draggedExerciseWorkoutId === workoutId) {
            if (draggedIndex === targetIndex) {
                this.draggedExerciseId = null;
                this.render();
                return;
            }
            const newExercises = [...targetWorkout.exercises];
            const [removed] = newExercises.splice(draggedIndex, 1);
            newExercises.splice(targetIndex, 0, removed);
            targetWorkout.exercises = newExercises;
        } else {
            sourceWorkout.exercises.splice(draggedIndex, 1);
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

    // Validation helpers
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

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

const app = new GymApp();
