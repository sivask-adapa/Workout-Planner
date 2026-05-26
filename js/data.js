/**
 * data.js
 * Exercise library — add new exercises here.
 * Each entry exports to EXERCISES for use across the app.
 */

export const EXERCISES = [
  // ── STRENGTH ──────────────────────────────────────────────────────────────
  { id:"sq", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Barbell Back Squat", muscles:"Quads, Glutes, Hamstrings", defSets:4, defReps:5,
    imgQueries:["barbell back squat exercise","back squat barbell gym","squat weightlifting"],
    steps:["Set the barbell at upper-chest height on a squat rack and load appropriate weight.","Step under the bar, resting it across your upper traps (not your neck).","Grip the bar just outside shoulder width and lift it off the rack, stepping back.","Stand with feet shoulder-width apart, toes angled out 15–30°.","Take a deep breath and brace your core hard (Valsalva maneuver).","Push your knees out in line with toes as you squat down.","Descend until hip crease is at or below knee level.","Drive through your full foot and extend hips and knees to stand.","Re-brace and repeat for your set."],
    tips:"Keep chest tall and avoid excessive forward lean. If heels rise, stretch ankles or elevate them slightly." },

  { id:"dl", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Conventional Deadlift", muscles:"Hamstrings, Glutes, Back", defSets:3, defReps:5,
    imgQueries:["deadlift barbell exercise","conventional deadlift gym","barbell deadlift weightlifting"],
    steps:["Stand with feet hip-width apart, bar over mid-foot (about 1 inch from shins).","Hinge at the hips and grip the bar just outside your legs with double overhand or mixed grip.","Drop hips until shins contact the bar; chest up, back flat, lats engaged.","Take a big breath, brace core, and create full-body tension.","Push the floor away while dragging the bar up your shins.","As bar passes knees, drive hips forward to stand tall.","Squeeze glutes at lockout — do NOT hyperextend lower back.","Lower the bar by hinging at hips first, then bending knees."],
    tips:"Think 'push the floor away' not 'pull the bar up'. Keep the bar in contact with your body throughout." },

  { id:"bp", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Bench Press", muscles:"Chest, Triceps, Delts", defSets:4, defReps:8,
    imgQueries:["bench press barbell exercise","bench press gym weightlifting","barbell bench press chest"],
    steps:["Lie on a bench with eyes under the bar; feet flat on the floor.","Grip the bar slightly wider than shoulder-width with a slight arch in lower back.","Pull shoulder blades together and down to protect shoulders.","Unrack the bar by locking out elbows and moving it over your chest.","Lower the bar with control toward your lower chest / upper abs.","Keep elbows at 45–75° to your torso (not flared 90°).","Touch the bar to your chest briefly, then press back up and slightly toward your face.","Lock out at the top and repeat."],
    tips:"Never bounce the bar off your chest. If wrists hurt, try a neutral grip or slightly wider hand position." },

  { id:"ohp", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Overhead Press", muscles:"Deltoids, Triceps, Core", defSets:3, defReps:8,
    imgQueries:["overhead press barbell exercise","military press barbell","shoulder press barbell gym"],
    steps:["Hold the bar at the front rack position (clavicle height) with a grip just outside shoulder width.","Elbows are slightly in front of the bar; wrists stacked over elbows.","Take a breath, brace core, and squeeze glutes for a rigid base.","Press the bar straight up, tucking your head back slightly as the bar passes your face.","Once the bar clears your head, push your head through so ears are between arms.","Lock elbows out fully at the top — shrug traps into the bar.","Lower with control back to the rack position."],
    tips:"Avoid leaning back excessively. If you need to, the weight is too heavy or hip flexors are too tight." },

  { id:"bbr", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Barbell Row", muscles:"Lats, Rhomboids, Biceps", defSets:4, defReps:8,
    imgQueries:["bent over barbell row exercise","barbell row back exercise","rowing barbell gym"],
    steps:["Stand over the bar with feet hip-width apart. Hinge until torso is ~45° or parallel.","Grip bar just outside shoulder width (overhand or underhand).","Keep the back flat and brace your core tightly.","Pull the bar toward your lower sternum / upper abs, driving elbows behind you.","Squeeze shoulder blades together hard at the top.","Lower the bar with control — maintain hip hinge position throughout.","Do not use momentum or bounce at the bottom."],
    tips:"Row toward your belly button for more lat activation; toward your chest for more upper back/rhomboid emphasis." },

  { id:"pu", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Pull-Up / Chin-Up", muscles:"Lats, Biceps, Core", defSets:3, defReps:8,
    imgQueries:["pull up exercise bar","pullup chin up exercise","pull up gym calisthenics"],
    steps:["Hang from the bar with arms fully extended. Pull-up = overhand. Chin-up = underhand.","Engage your core and squeeze your glutes to prevent swinging.","Depress your shoulder blades (pull them down) to initiate.","Drive your elbows toward your hips as you pull your chin above the bar.","Hold the top position briefly, then lower with full control.","Return to a dead hang (full elbow extension) before the next rep."],
    tips:"Use band assistance or negatives (jumping up, slow lower) to build to your first unassisted pull-up." },

  { id:"lu", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Dumbbell Lunges", muscles:"Quads, Glutes, Hamstrings", defSets:3, defReps:12,
    imgQueries:["dumbbell lunge exercise","walking lunge gym fitness","lunge exercise legs"],
    steps:["Stand tall holding dumbbells at your sides, feet together.","Step forward with one foot — about 2–3 feet.","Lower your back knee toward the floor, bending both knees to ~90°.","Keep your front shin vertical and chest upright.","Drive through your front heel to return to the start, or step forward into the next lunge.","Alternate legs for the desired reps."],
    tips:"Don't let the front knee cave inward. Keep your torso upright to maximize glute activation." },

  { id:"rdl", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Romanian Deadlift", muscles:"Hamstrings, Glutes", defSets:3, defReps:10,
    imgQueries:["Romanian deadlift exercise barbell","RDL barbell hip hinge","stiff leg deadlift exercise"],
    steps:["Hold a barbell or dumbbells in front of your thighs, standing tall.","Soften your knees slightly — this is a hinge, not a squat.","Push your hips back as far as possible, lowering the weight along your legs.","Feel a strong stretch in your hamstrings — lower until back begins to round.","Drive your hips forward to return to standing, squeezing glutes at the top.","Keep the weight close to your body throughout the movement."],
    tips:"This is 90% hip movement. If you feel it in your lower back, hinge more and reduce knee bend." },

  { id:"dsp", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Dumbbell Shoulder Press", muscles:"Delts, Triceps", defSets:3, defReps:12,
    imgQueries:["dumbbell shoulder press exercise","seated dumbbell press gym","overhead dumbbell press fitness"],
    steps:["Sit on a bench with back support (or stand). Hold dumbbells at shoulder height, palms forward.","Feet flat on the floor, core tight, back against the pad.","Press the dumbbells straight up until arms are fully extended overhead.","Pause briefly at the top — do not let the weights crash together.","Lower with control back to shoulder height."],
    tips:"Keep wrists neutral (not bent back). Arnold Press variation rotates palms inward at the bottom for extra range." },

  { id:"bc", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Bicep Curl", muscles:"Biceps", defSets:3, defReps:12,
    imgQueries:["bicep curl dumbbell exercise","dumbbell curl biceps gym","bicep curl fitness"],
    steps:["Stand with a dumbbell in each hand, arms fully extended, palms facing forward.","Keep upper arms pinned to your sides throughout.","Curl the weight up by flexing at the elbow — don't swing the torso.","Squeeze the bicep hard at the top of the movement.","Lower slowly with control (2–3 second negative).","Full extension at the bottom, then repeat."],
    tips:"Slow negatives (lowering) build more muscle than fast ones. Try a 3-second lower for intensity." },

  { id:"td", cat:"strength", catLabel:"Strength", emoji:"🏋️", name:"Tricep Dip", muscles:"Triceps, Chest", defSets:3, defReps:12,
    imgQueries:["tricep dip exercise parallel bars","dip exercise gym calisthenics","parallel bar dip triceps"],
    steps:["Grip parallel bars (or a bench behind you), arms straight, body upright.","Lower your body by bending elbows, going down until shoulders are below elbows.","Keep elbows pointing backward, not flaring outward.","Press back up to full arm extension.","For bench dips: legs out straight, hands behind you on a bench."],
    tips:"Lean forward slightly to target the chest more; stay upright to hit triceps more. Add weight with a dip belt for progression." },

  // ── CARDIO ────────────────────────────────────────────────────────────────
  { id:"run", cat:"cardio", catLabel:"Cardio", emoji:"🏃", name:"Steady-State Running", muscles:"Legs, Cardiovascular", defSets:1, defReps:30,
    imgQueries:["running jogging exercise outdoors","jogging fitness road run","runner jogging park"],
    steps:["Warm up with 5 minutes of brisk walking.","Begin running at a conversational pace — you should speak in full sentences.","Land mid-foot under your hips, not heel-striking far in front.","Keep arms at ~90° and swing forward-back (not across your body).","Maintain a cadence of ~170–180 steps per minute for efficiency.","Run for your target duration (20–60 min), keeping effort consistent.","Cool down with 5 min of walking and stretch major leg muscles."],
    tips:"Target Zone 2 heart rate (~60–70% max HR). This is the foundation of aerobic fitness." },

  { id:"spr", cat:"cardio", catLabel:"Cardio", emoji:"🏃", name:"HIIT Sprints", muscles:"Full Body, Cardio", defSets:8, defReps:20,
    imgQueries:["sprint running athlete track","sprinting exercise fitness","sprint running training"],
    steps:["Warm up thoroughly for 10 minutes (light jog, dynamic stretches).","Sprint at 85–95% of max effort for 20–30 seconds.","Recover with a slow walk or easy jog for 60–90 seconds.","Repeat the sprint/rest cycle 6–10 times.","Cool down with 5–10 minutes of easy walking.","Stretch hip flexors, quads, and calves after."],
    tips:"HIIT burns more calories in less time but is highly taxing — limit to 2–3 sessions per week with rest days between." },

  { id:"cyc", cat:"cardio", catLabel:"Cardio", emoji:"🏃", name:"Cycling", muscles:"Quads, Glutes, Cardio", defSets:1, defReps:30,
    imgQueries:["cycling exercise fitness bicycle","stationary bike gym exercise","indoor cycling workout"],
    steps:["Set seat height so your knee is slightly bent (10–15°) at the bottom of the pedal stroke.","Warm up at low resistance for 5 minutes.","Pedal in smooth, round circles — think 'scraping mud off the bottom of your shoe'.","Maintain a cadence of 80–100 RPM for aerobic work.","Increase resistance for hill simulations; reduce for recovery intervals.","Cool down with 5 minutes of easy pedaling."],
    tips:"Cycling is excellent for those with knee pain from running. It's joint-friendly while still building leg strength." },

  { id:"jr", cat:"cardio", catLabel:"Cardio", emoji:"🏃", name:"Jump Rope", muscles:"Calves, Cardio", defSets:5, defReps:60,
    imgQueries:["jump rope exercise fitness","skipping rope workout","jump rope cardio training"],
    steps:["Hold the rope handles with a relaxed grip, elbows close to your sides.","Keep jumps small — only about 1 inch off the ground.","Land on the balls of your feet with soft knees.","Rotate the rope primarily with your wrists, not your arms.","Start with 30-second intervals; rest 30 sec. Build up over weeks.","Try double-unders (rope passes twice per jump) for advanced progression."],
    tips:"Jump rope burns roughly 10 calories per minute. Even 10 minutes provides serious cardio benefit." },

  { id:"row", cat:"cardio", catLabel:"Cardio", emoji:"🏃", name:"Rowing Machine", muscles:"Full Body, Cardio", defSets:1, defReps:20,
    imgQueries:["rowing machine exercise gym","indoor rowing ergometer","rowing machine workout fitness"],
    steps:["Strap feet in; sit tall, holding the handle with overhand grip.","The stroke order: LEGS → BODY → ARMS.","Start the drive by pushing through your feet, keeping arms straight.","Once legs are nearly straight, lean back slightly (~11 o'clock) and pull the handle to lower ribs.","Return: ARMS → BODY → LEGS — reverse the sequence with control.","Aim for a stroke rate of 22–26 spm for aerobic work."],
    tips:"The legs provide ~60% of the power. Most beginners over-rely on their arms — focus on leg drive." },

  { id:"swm", cat:"cardio", catLabel:"Cardio", emoji:"🏃", name:"Swimming", muscles:"Full Body, Cardio", defSets:1, defReps:30,
    imgQueries:["swimming freestyle exercise pool","freestyle swimming workout","swimmer pool training"],
    steps:["Enter the pool and start with a warm-up of easy freestyle for 2–4 laps.","Rotate your body side to side; breathe every 2–3 strokes by turning your head (not lifting).","Kick from the hips with loose ankles — small, fast kicks.","Pull with a high elbow and an S-shaped path under the water.","Do intervals: swim 1–4 laps hard, rest 20–30 seconds, repeat.","Cool down with easy backstroke."],
    tips:"Swimming is one of the best full-body, zero-impact workouts. It's ideal for recovery days or injury rehab." },

  { id:"stm", cat:"cardio", catLabel:"Cardio", emoji:"🏃", name:"Stairmaster", muscles:"Glutes, Quads, Cardio", defSets:1, defReps:20,
    imgQueries:["stairmaster gym exercise machine","stair climbing fitness machine","step mill exercise gym"],
    steps:["Set the machine to a low speed to begin (level 4–6).","Step with your whole foot — avoid tiptoeing.","Keep your chest up and do not lean heavily on the handrails.","Use handrails lightly for balance only, not to support weight.","Increase speed every 3–5 minutes for progression.","Target 20–45 minute sessions in the aerobic zone."],
    tips:"Leaning on the rails removes up to 40% of the workload. Stand as tall and unsupported as possible." },

  // ── BODYWEIGHT ────────────────────────────────────────────────────────────
  { id:"pup", cat:"bw", catLabel:"Bodyweight", emoji:"🤸", name:"Push-Up", muscles:"Chest, Triceps, Core", defSets:3, defReps:15,
    imgQueries:["push up exercise fitness","pushup workout bodyweight","push up chest exercise"],
    steps:["Start in a plank position, hands slightly wider than shoulder-width, arms straight.","Keep your body in a straight line from head to heels — squeeze glutes, don't let hips sag.","Lower your chest toward the floor by bending your elbows at about 45°.","Chest touches (or nearly touches) the ground.","Press through your palms to return to the top.","Variations: Wide grip (chest), Close/Diamond (triceps), Decline (upper chest), Pike (shoulders)."],
    tips:"If full push-ups are too hard, do them on your knees or hands elevated on a bench. Progress from there." },

  { id:"bws", cat:"bw", catLabel:"Bodyweight", emoji:"🤸", name:"Bodyweight Squat", muscles:"Quads, Glutes", defSets:3, defReps:20,
    imgQueries:["bodyweight squat exercise","air squat fitness","squat no weight exercise legs"],
    steps:["Stand with feet shoulder-width apart, toes pointed out slightly.","Hold arms out in front or clasp hands at chest for balance.","Push your knees out as you sit back and down, as if sitting into a chair.","Aim for thighs to be parallel to the floor or lower.","Keep your chest up and heels on the ground throughout.","Drive through your heels and squeeze glutes to stand."],
    tips:"Progress to jump squats, pistol squat progressions, or add tempo (3-second descent) for increased challenge." },

  { id:"plk", cat:"bw", catLabel:"Bodyweight", emoji:"🤸", name:"Plank", muscles:"Core, Glutes", defSets:3, defReps:45,
    imgQueries:["plank exercise core fitness","plank workout abdominal","forearm plank exercise"],
    steps:["Forearm plank: rest on forearms with elbows directly under shoulders.","Feet hip-width apart on toes, or together for a harder variation.","Create a straight line from head to heels — do NOT let hips sag or pike up.","Squeeze every muscle: abs, glutes, quads, lats.","Breathe steadily. Hold for 20 seconds to 2+ minutes.","Variations: Side plank, RKC plank, plank with shoulder taps."],
    tips:"Quality beats duration. A perfect 20-second plank is better than a 60-second sagging one." },

  { id:"bur", cat:"bw", catLabel:"Bodyweight", emoji:"🤸", name:"Burpee", muscles:"Full Body", defSets:3, defReps:10,
    imgQueries:["burpee exercise full body","burpee workout fitness","burpee jump exercise"],
    steps:["Stand with feet shoulder-width apart.","Squat down and place your hands on the floor outside your feet.","Jump or step both feet back to a push-up position.","Perform a push-up (optional but recommended).","Jump or step your feet back to your hands.","Explode upward, jumping off the ground with arms overhead.","Land softly, immediately flow into the next rep."],
    tips:"Burpees can be scaled by stepping instead of jumping, or removing the push-up. Go for quality over speed." },

  { id:"hspu", cat:"bw", catLabel:"Bodyweight", emoji:"🤸", name:"Handstand Push-Up", muscles:"Deltoids, Triceps", defSets:3, defReps:5,
    imgQueries:["handstand push up exercise","handstand pushup wall calisthenics","handstand fitness gymnastics"],
    steps:["Build prerequisite: be comfortable holding a wall handstand for 30+ seconds.","Start with pike push-ups and decline push-ups to build overhead pressing strength.","Kick up to a wall handstand with hands 6–8 inches from the wall.","Lower your head toward the floor in a controlled manner, elbows at ~45°.","Touch the top of your head to the floor (tripod position).","Press hard through your palms to extend back to a full handstand."],
    tips:"Use an AbMat or folded towel under your head while learning to limit range and protect your neck." },

  { id:"mup", cat:"bw", catLabel:"Bodyweight", emoji:"🤸", name:"Muscle-Up", muscles:"Lats, Chest, Triceps", defSets:3, defReps:5,
    imgQueries:["muscle up bar exercise calisthenics","muscle up gymnastics rings","bar muscle up fitness"],
    steps:["Prerequisites: 10+ strict pull-ups and 10+ dips.","Hang from rings or a bar with a false grip (rings) or overhand grip (bar).","Generate an aggressive pull, aiming to get your hips to bar level.","As chest reaches bar height, rapidly transition elbows from below to above the bar.","Push through the turn over into a dip position.","Press up to full lockout. Lower under control."],
    tips:"The transition is the hardest part. Practice explosive pulls (getting hips to the bar) before adding the transition." },

  { id:"lsi", cat:"bw", catLabel:"Bodyweight", emoji:"🤸", name:"L-Sit", muscles:"Core, Hip Flexors", defSets:3, defReps:15,
    imgQueries:["L-sit calisthenics exercise parallettes","L sit gymnastics fitness","L sit hold exercise"],
    steps:["Sit on the floor with legs straight. Practice pressing hands into the floor and lifting hips.","Progress to tucked L-sit (knees bent) on floor/parallettes.","On parallettes or dip bars: press hands down, raise hips, extend legs forward to 90°.","Hold the position — body forms an L shape.","Keep legs together, toes pointed, chest tall.","Build from 2-second holds to 30-second holds progressively."],
    tips:"Use parallettes or gymnastics rings to get full range of motion (floor limits depth)." },

  // ── CORE ──────────────────────────────────────────────────────────────────
  { id:"db", cat:"core", catLabel:"Core", emoji:"🎯", name:"Dead Bug", muscles:"Deep Core, Hip Flexors", defSets:3, defReps:10,
    imgQueries:["dead bug exercise core floor","core exercise floor abdominal","abdominal stability exercise"],
    steps:["Lie on your back. Press your lower back flat into the floor and KEEP it there.","Raise arms straight up toward the ceiling. Lift legs to a tabletop position (knees at 90°).","Exhale slowly as you extend your right arm back and straighten your left leg simultaneously.","Keep the lower back pressed to the floor the entire time.","Return to start, then repeat on the opposite side.","That's 1 rep. Do 8–12 per side."],
    tips:"If your lower back arches off the floor, reduce your range of motion. The lower back staying flat is the whole point." },

  { id:"pal", cat:"core", catLabel:"Core", emoji:"🎯", name:"Pallof Press", muscles:"Obliques, Core", defSets:3, defReps:10,
    imgQueries:["cable machine core exercise gym","pallof press cable exercise","anti rotation core exercise cable"],
    steps:["Attach a band or cable at chest height. Stand perpendicular to the anchor point.","Hold the handle with both hands at your chest.","Press the handle straight out in front of you, fully extending arms.","Hold for 1–2 seconds — resist the rotational pull of the cable/band.","Return handles to chest. Repeat 8–12 reps per side.","The further from the anchor and the heavier the resistance, the harder it gets."],
    tips:"This is an anti-rotation exercise. Your goal is to NOT rotate. This is how your core functions in real life." },

  { id:"hlr", cat:"core", catLabel:"Core", emoji:"🎯", name:"Hanging Leg Raise", muscles:"Lower Abs, Hip Flexors", defSets:3, defReps:12,
    imgQueries:["hanging leg raise exercise bar","leg raise pull up bar abs","hanging ab exercise fitness"],
    steps:["Hang from a pull-up bar with a shoulder-width overhand grip, arms straight.","Engage your core and hollow your body slightly.","Raise your legs (bent or straight) up toward the bar, controlling the movement.","Avoid swinging — the motion should be controlled, not momentum-driven.","Lower your legs slowly back to start.","Progression: tuck → straight legs → toes to bar."],
    tips:"Focus on posterior pelvic tilt (tucking hips) to maximize ab activation." },

  { id:"abw", cat:"core", catLabel:"Core", emoji:"🎯", name:"Ab Wheel Rollout", muscles:"Entire Core, Lats", defSets:3, defReps:8,
    imgQueries:["ab wheel rollout exercise core","abdominal wheel fitness exercise","ab roller core workout"],
    steps:["Kneel on the floor holding the ab wheel with both hands.","Start with the wheel directly under your shoulders.","Slowly roll forward, extending your body while keeping your core braced.","Go as far as you can while maintaining a FLAT back (no sagging hips).","Pause at full extension, then use your core and lats to pull the wheel back.","Do not let your lower back collapse."],
    tips:"Wall rollouts (rolling toward a wall to limit range) are the best progression for beginners before full rollouts." },

  { id:"rt", cat:"core", catLabel:"Core", emoji:"🎯", name:"Russian Twist", muscles:"Obliques, Abs", defSets:3, defReps:20,
    imgQueries:["Russian twist exercise core oblique","oblique twist core exercise fitness","Russian twist medicine ball"],
    steps:["Sit on the floor, knees bent, feet slightly elevated (or flat for easier version).","Lean back at ~45° so your torso and thighs form a V-shape.","Clasp hands together or hold a weight.","Rotate your torso to the right, bringing hands to the right side.","Rotate back through center to the left side.","Keep movements controlled and breathe steadily."],
    tips:"Focus on rotating your ribs/torso, not just swinging your arms. Add a medicine ball or dumbbell for progression." },

  // ── HIIT ──────────────────────────────────────────────────────────────────
  { id:"tab", cat:"hiit", catLabel:"HIIT", emoji:"⚡", name:"Tabata Protocol", muscles:"Full Body", defSets:8, defReps:20,
    imgQueries:["HIIT workout exercise training","high intensity interval training fitness","tabata workout exercise"],
    steps:["Choose one exercise (e.g., squats, push-ups, burpees, sprints).","Set a timer for 8 rounds of: 20 seconds all-out effort → 10 seconds rest.","Total time: 4 minutes per exercise.","Work at 90–100% max effort during the 20-second intervals.","The last few rounds should feel nearly impossible.","Rest 1–2 minutes, then repeat with a new exercise if desired."],
    tips:"True Tabata requires maximum effort — if it doesn't feel devastating, you're not doing it right." },

  { id:"amp", cat:"hiit", catLabel:"HIIT", emoji:"⚡", name:"AMRAP Circuit", muscles:"Full Body", defSets:1, defReps:15,
    imgQueries:["circuit training workout exercise","functional fitness training gym","CrossFit workout exercise"],
    steps:["Choose 3–5 exercises (e.g., 10 push-ups, 15 squats, 5 pull-ups, 20 jump rope).","Set a timer for 10–20 minutes.","Complete as many full rounds of the circuit as possible before time expires.","Rest only as needed — the goal is continuous movement.","Track your rounds to beat in future sessions.","Scale each movement to your fitness level."],
    tips:"AMRAP is both a workout and a benchmark. It allows you to track progress objectively over time." },

  { id:"emo", cat:"hiit", catLabel:"HIIT", emoji:"⚡", name:"EMOM Training", muscles:"Varies", defSets:10, defReps:10,
    imgQueries:["interval training exercise gym","functional fitness workout","EMOM workout exercise training"],
    steps:["Choose 1–3 exercises and a rep count (e.g., 10 kettlebell swings + 5 push-ups).","At the start of every minute, complete the prescribed reps.","Rest for whatever time remains in the minute.","As the next minute begins, repeat.","Continue for 10–20 minutes.","As you fatigue, rest time shrinks — this increases intensity naturally."],
    tips:"Choose a rep count you can finish in ~35–45 seconds to allow 15–25 seconds of rest." },

  { id:"ks", cat:"hiit", catLabel:"HIIT", emoji:"⚡", name:"Kettlebell Swing", muscles:"Glutes, Hamstrings, Core", defSets:5, defReps:20,
    imgQueries:["kettlebell swing exercise fitness","kettlebell workout gym","kettlebell swing training"],
    steps:["Stand with feet shoulder-width apart, kettlebell on the floor between your feet.","Hinge at the hips and grip the handle with both hands.","Hike the bell back between your legs like a football snap.","Explosively drive your hips forward, projecting the bell to chest/shoulder height.","The bell floats at the top — do NOT squat or pull with your arms.","Let gravity bring it back down, hinge back to load again, and repeat."],
    tips:"The power comes from the hip hinge, not the arms. Think: 'hips forward, hips back' like slamming a car door." },

  { id:"bxj", cat:"hiit", catLabel:"HIIT", emoji:"⚡", name:"Box Jump", muscles:"Quads, Glutes, Calves", defSets:4, defReps:8,
    imgQueries:["box jump exercise plyometric","box jump training gym","plyometric jump exercise fitness"],
    steps:["Stand facing a sturdy box/platform. Feet hip-width apart.","Bend into a quarter squat, swinging arms back.","Explosively swing arms forward and jump off both feet.","Land softly on top of the box with both feet flat, knees slightly bent.","Stand up fully on top of the box to complete the rep.","Step down (don't jump down) to protect your Achilles tendon."],
    tips:"Start with a lower box (12–16 inches). Soft landing with bent knees is critical for injury prevention." },

  // ── FLEXIBILITY ───────────────────────────────────────────────────────────
  { id:"str", cat:"flex", catLabel:"Flexibility", emoji:"🧘", name:"Static Stretching", muscles:"Full Body", defSets:1, defReps:10,
    imgQueries:["static stretching exercise flexibility","stretching workout cool down","flexibility stretch exercise"],
    steps:["Perform ONLY after a workout or when muscles are warm (never cold).","Move slowly into the stretch until you feel moderate tension — NOT pain.","Hold each position for 20–60 seconds.","Breathe deeply and relax into the stretch on each exhale.","Do not bounce — hold steady.","Key stretches: hamstring, hip flexor lunge, pigeon pose, chest doorway stretch, overhead tricep."],
    tips:"Static stretching is most effective post-workout. It temporarily reduces power output if done before exercise." },

  { id:"dwu", cat:"flex", catLabel:"Flexibility", emoji:"🧘", name:"Dynamic Warm-Up", muscles:"Full Body", defSets:1, defReps:10,
    imgQueries:["dynamic warm up exercise athlete","dynamic stretching warmup","warm up drill fitness sports"],
    steps:["Leg swings (forward/back and side-to-side): 10–15 each leg.","Hip circles: 10 each direction.","Arm circles: 10 forward, 10 backward.","Inchworms: bend at hips, walk hands to plank, walk feet to hands — 5–8 reps.","World's greatest stretch: lunge forward, drop back knee, rotate chest open — 5 each side.","High knees, butt kicks, lateral shuffles: 20 meters each."],
    tips:"A dynamic warm-up raises your heart rate, lubricates joints, and activates muscles far better than static stretching." },

  { id:"yog", cat:"flex", catLabel:"Flexibility", emoji:"🧘", name:"Yoga (Sun Salutation)", muscles:"Full Body, Spine", defSets:5, defReps:1,
    imgQueries:["sun salutation yoga pose","yoga exercise flow surya namaskar","yoga class fitness pose"],
    steps:["Mountain Pose: stand tall, feet together, hands at heart.","Inhale: sweep arms overhead.","Exhale: fold forward — let your head hang.","Inhale: lift halfway up, flat back.","Exhale: step or jump back to plank, lower to Chaturanga (low push-up).","Inhale: Upward Dog — chest up, hips low.","Exhale: push back to Downward Dog — hold 5 breaths.","Inhale: step feet forward. Exhale: fold. Inhale: stand sweeping arms overhead."],
    tips:"Do 3–5 rounds as a warm-up or 10–12 for a full session. Breathe with every movement." },

  { id:"fr", cat:"flex", catLabel:"Flexibility", emoji:"🧘", name:"Foam Rolling", muscles:"Full Body", defSets:1, defReps:10,
    imgQueries:["foam rolling exercise recovery","foam roller muscle fitness","foam rolling myofascial release"],
    steps:["Place the foam roller under the target muscle group.","Use your bodyweight to apply pressure on the roller.","Roll slowly (1 inch per second) along the length of the muscle.","When you find a tight or tender spot, pause and hold for 20–30 seconds.","Breathe deeply and allow the tissue to release.","Avoid rolling directly over joints or the lower back spine.","Spend 60–90 seconds per muscle group."],
    tips:"Foam rolling before a workout can improve range of motion without decreasing muscle activation." },

  { id:"hfd", cat:"flex", catLabel:"Flexibility", emoji:"🧘", name:"Hip Flexor Drill", muscles:"Hips, Quads", defSets:2, defReps:30,
    imgQueries:["hip flexor stretch lunge exercise","hip flexor mobility drill","hip stretch lunge fitness"],
    steps:["Step into a deep lunge, right foot forward, left knee on the ground.","Push your hips forward and down — feel the stretch at the front of the left hip.","Hold 30 seconds, then add a reach: raise your left arm overhead and lean slightly right.","For a dynamic version: slowly rock forward and back for 10 reps.","Switch sides."],
    tips:"Tight hip flexors cause lower back pain and anterior pelvic tilt. Do this daily, especially if you sit for long periods." },

  // ── SPORT ─────────────────────────────────────────────────────────────────
  { id:"ald", cat:"sport", catLabel:"Sport", emoji:"🏅", name:"Agility Ladder Drills", muscles:"Calves, Hip Flexors", defSets:3, defReps:10,
    imgQueries:["agility ladder drill training","agility ladder footwork exercise","speed ladder drill sports"],
    steps:["Lay an agility ladder flat on the ground.","In-In-Out-Out: both feet step into each rung, then step out to the sides.","Single-leg hops: hop through each rung on one leg — 10 rungs per leg.","Lateral shuffle: face sideways, step laterally through each rung.","Icky shuffle: step right foot in, then left foot in, then right foot out to the right.","Work through each drill 2–3 times. Focus on light, quick footwork."],
    tips:"Speed comes with repetition. Initially focus on accuracy and footwork pattern, then add speed over time." },

  { id:"slp", cat:"sport", catLabel:"Sport", emoji:"🏅", name:"Sled Push / Pull", muscles:"Quads, Glutes, Core", defSets:4, defReps:20,
    imgQueries:["sled push exercise gym training","prowler sled push fitness","sled push workout conditioning"],
    steps:["Load the sled with appropriate weight.","For push: lean forward at ~45°, hands on the handles, drive with your legs.","Push for 20–40 meters with maximum effort.","For pull: attach a strap around your waist, face away from sled, and drive forward.","Rest 1–2 minutes between sets.","3–6 sets is typical for conditioning work."],
    tips:"The sled is nearly impossible to do with bad form. It will punish laziness and reward hard effort naturally." },

  { id:"brj", cat:"sport", catLabel:"Sport", emoji:"🏅", name:"Broad Jump", muscles:"Glutes, Quads, Calves", defSets:3, defReps:5,
    imgQueries:["broad jump plyometric exercise","standing long jump athletics","horizontal jump training fitness"],
    steps:["Stand with feet hip-width apart, toes at a line.","Bend into a quarter squat and swing arms back.","Explosively jump forward as far as possible, swinging arms to propel you.","Land with both feet simultaneously, knees bent to absorb impact.","Measure the distance from the starting line to your heels.","Reset and repeat for 3–5 jumps."],
    tips:"Broad jump distance is a powerful predictor of athletic speed and power. Track it as a benchmark." },

  { id:"mbs", cat:"sport", catLabel:"Sport", emoji:"🏅", name:"Medicine Ball Slam", muscles:"Core, Lats, Shoulders", defSets:4, defReps:10,
    imgQueries:["medicine ball slam exercise","slam ball workout fitness","medicine ball throw exercise gym"],
    steps:["Stand with feet shoulder-width apart, holding a medicine ball at hip level.","Raise the ball overhead with fully extended arms, rising onto toes.","Slam the ball down into the floor as hard as possible with full force.","Engage your entire core and hinge forward during the slam.","Catch the ball on the bounce (or pick it up) and immediately go into the next rep."],
    tips:"Use a rubber slam ball (not a standard medicine ball) — they don't bounce up and hit you. Full overhead extension is key." },

  // ── MIND-BODY ─────────────────────────────────────────────────────────────
  { id:"dbr", cat:"mind", catLabel:"Mind-Body", emoji:"🌿", name:"Diaphragmatic Breathing", muscles:"Diaphragm", defSets:1, defReps:10,
    imgQueries:["diaphragmatic breathing exercise relaxation","deep breathing yoga meditation","breathing exercise fitness relaxation"],
    steps:["Lie on your back or sit comfortably. Place one hand on your chest and one on your belly.","Inhale slowly through your nose for 4 counts — the belly hand should rise, chest stays still.","Pause for 1–2 counts.","Exhale slowly through pursed lips for 6–8 counts, feeling the belly fall.","Repeat for 5–10 minutes.","Practice the 4-7-8 method: inhale 4 sec, hold 7 sec, exhale 8 sec for deeper relaxation."],
    tips:"This activates the parasympathetic nervous system (rest & digest). Use it before sleep, after a hard workout, or during stress." },

  { id:"yiny", cat:"mind", catLabel:"Mind-Body", emoji:"🌿", name:"Yin Yoga", muscles:"Fascia, Hips", defSets:1, defReps:5,
    imgQueries:["yin yoga pose exercise floor","yoga floor pose flexibility stretch","yoga class pose fitness"],
    steps:["Choose a pose: Butterfly, Dragon (deep hip flexor lunge), Sleeping Swan (pigeon).","Enter the pose and find your EDGE — where you feel sensation but no pain.","Use props (blocks, bolsters, pillows) to make it comfortable enough to stay.","Fully relax your muscles — you are NOT actively stretching, you are releasing passively.","Hold each pose for 3–5 minutes.","Exit slowly; take a 1–2 minute rest between poses."],
    tips:"The long holds work on the fascia and connective tissue, not muscles. The sensations can be intense — breathe through them." },

  { id:"cwi", cat:"mind", catLabel:"Mind-Body", emoji:"🌿", name:"Cold Water Immersion", muscles:"Cardiovascular", defSets:1, defReps:5,
    imgQueries:["ice bath athlete recovery","cold water immersion fitness recovery","cold plunge ice bath exercise"],
    steps:["Fill a tub with cold water. Optimal temp is 50–59°F (10–15°C). Add ice if needed.","Ease into the water slowly to avoid cold shock response.","Focus on slow, controlled breathing to calm the nervous system.","Immerse up to your neck if possible for whole-body benefits.","Stay in for 2–10 minutes depending on temperature and tolerance.","Exit and warm up naturally — avoid immediately jumping in a hot shower."],
    tips:"Cold exposure reduces inflammation and DOMS, boosts alertness, and builds mental resilience. Start with just 1–2 minutes." },

  // ── DUMBBELLS ──────────────────────────────────────────────────────────────
  { id:"dg",   cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Goblet Squat", muscles:"Quads, Glutes, Core", defSets:3, defReps:12,
    imgQueries:["dumbbell goblet squat exercise","goblet squat fitness","goblet squat legs"],
    steps:["Hold a single dumbbell vertically at chest height with both hands cupped around the top end.","Stand with feet shoulder-width apart, toes pointed out 30–45°.","Keeping your chest tall and elbows inside your knees, sit down into a deep squat.","Descend until your hips are below parallel — use the dumbbell as a counterbalance.","Drive through your heels and squeeze your glutes to stand.","Keep your torso upright throughout — avoid folding forward."],
    tips:"The goblet squat is the best squat teaching tool. The weight naturally keeps you upright and forces good depth." },

  { id:"dsd",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Sumo Deadlift", muscles:"Inner Thighs, Glutes, Hamstrings", defSets:3, defReps:10,
    imgQueries:["dumbbell sumo deadlift exercise","sumo deadlift dumbbell legs","sumo squat deadlift fitness"],
    steps:["Stand with feet wider than shoulder-width, toes pointed out 45°.","Hold a dumbbell vertically with both hands between your legs.","Hinge at the hips and bend knees to lower — back flat, chest up.","Brace your core and drive through your heels to stand, squeezing glutes at the top.","Push your knees outward as you descend and ascend — don't let them cave in.","Lower the dumbbell back to the floor with control."],
    tips:"The wide stance targets your inner thighs (adductors) far more than a conventional stance. Great for glute development." },

  { id:"dcf",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Chest Fly", muscles:"Chest, Anterior Deltoids", defSets:3, defReps:12,
    imgQueries:["dumbbell chest fly exercise","dumbbell fly chest workout","chest fly dumbbell bench"],
    steps:["Lie on a flat bench holding a dumbbell in each hand, arms extended above your chest, palms facing each other.","Maintain a slight bend in your elbows (about 10–15°) — never fully lock or fully bend.","Slowly lower the dumbbells in a wide arc until you feel a deep stretch across your chest.","Stop when your elbows are roughly level with your shoulders.","Reverse the arc, squeezing your chest as you bring the dumbbells back together at the top.","Think 'hugging a large tree' — the movement is from the shoulder joint, not the elbow."],
    tips:"Keep the elbow bend constant — don't turn this into a press. Control the descent slowly for maximum chest stretch." },

  { id:"dip",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Incline Press", muscles:"Upper Chest, Deltoids, Triceps", defSets:3, defReps:10,
    imgQueries:["dumbbell incline press exercise","incline dumbbell press upper chest","dumbbell incline bench press"],
    steps:["Set a bench to a 30–45° incline. Sit back with a dumbbell in each hand resting on your thighs.","Kick the dumbbells up as you lie back, positioning them at shoulder height, palms forward.","Brace your core and retract your shoulder blades against the bench.","Press the dumbbells up and slightly inward until arms are fully extended.","Lower with control — elbows at 45–75° to your torso (not flared).","Feel a stretch across the upper chest at the bottom of each rep."],
    tips:"A 30° incline hits the upper chest without over-stressing the shoulders. Going steeper than 45° shifts focus to the front delts." },

  { id:"ddbr", cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Bent-Over Row", muscles:"Lats, Rhomboids, Rear Delts, Biceps", defSets:3, defReps:12,
    imgQueries:["dumbbell bent over row exercise","dumbbell row back exercise","bent over dumbbell row fitness"],
    steps:["Hold a dumbbell in each hand, hinge at the hips until your torso is ~45° to the floor.","Let the dumbbells hang straight down from your shoulders, palms facing each other.","Keeping your back flat and core braced, row both dumbbells toward your hips simultaneously.","Drive your elbows behind you — squeeze your shoulder blades together hard at the top.","Lower with full control — let your arms fully extend at the bottom.","Avoid using momentum; each rep should be strict."],
    tips:"A neutral (palms-in) grip reduces shoulder impingement and allows a fuller range of motion versus an overhand grip." },

  { id:"dlr",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Lateral Raise", muscles:"Lateral (Side) Deltoids", defSets:3, defReps:15,
    imgQueries:["dumbbell lateral raise exercise","side lateral raise shoulders","dumbbell shoulder lateral raise"],
    steps:["Stand holding a dumbbell in each hand at your sides, palms facing your thighs.","Maintain a slight bend in your elbows throughout the movement.","Raise both arms out to the sides until they reach shoulder height — no higher.","Lead with your elbows, not your wrists. Pinkies should be slightly higher than thumbs at the top.","Pause briefly at the top, then lower slowly over 3 seconds.","Avoid shrugging your traps — keep shoulders packed down."],
    tips:"Use lighter weight than you think. The lateral deltoid is small and most people cheat with heavy weights. Slow negatives are the key." },

  { id:"dfr",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Front Raise", muscles:"Anterior (Front) Deltoids, Upper Chest", defSets:3, defReps:12,
    imgQueries:["dumbbell front raise exercise","front raise shoulders dumbbell","dumbbell anterior deltoid raise"],
    steps:["Stand with a dumbbell in each hand hanging in front of your thighs, palms facing back.","Keeping a slight elbow bend, raise one or both arms directly in front of you to shoulder height.","Pause at the top — don't swing the weight with your body.","Lower slowly and under control back to the start.","Alternate arms for variety, or raise both simultaneously for added core challenge."],
    tips:"Avoid going above shoulder height — it adds impingement risk with no extra benefit. Front raises complement lateral raises for full deltoid development." },

  { id:"dhc",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Hammer Curl", muscles:"Brachialis, Biceps, Forearms", defSets:3, defReps:12,
    imgQueries:["dumbbell hammer curl exercise","hammer curl biceps forearm","neutral grip dumbbell curl"],
    steps:["Stand with a dumbbell in each hand, arms extended, palms facing each other (neutral grip).","Pin your upper arms to your sides — they should not move during the curl.","Curl both dumbbells simultaneously toward your shoulders, maintaining the neutral grip throughout.","Squeeze at the top of the movement.","Lower slowly — take 2–3 seconds on the way down.","Alternatively, alternate arms for a slightly different stimulus."],
    tips:"The neutral grip targets the brachialis (the muscle under your bicep) and brachioradialis (forearm) more than standard curls — great for overall arm thickness." },

  { id:"dconc", cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Concentration Curl", muscles:"Biceps Brachii (peak)", defSets:3, defReps:12,
    imgQueries:["dumbbell concentration curl exercise","concentration curl bicep seated","dumbbell bicep peak curl"],
    steps:["Sit on the edge of a bench with legs spread. Hold a dumbbell in one hand.","Rest the back of your upper arm against the inside of your same-side thigh.","Let the dumbbell hang fully extended — a full stretch at the bottom is key.","Curl the weight up toward your shoulder by contracting your bicep only.","Squeeze hard at the top and hold for 1–2 seconds.","Lower slowly and fully before the next rep. Complete all reps, then switch arms."],
    tips:"Bracing your arm against your leg eliminates all cheating and fully isolates the bicep. This is the best exercise for building bicep peak." },

  { id:"dtk",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Tricep Kickback", muscles:"Triceps Brachii", defSets:3, defReps:12,
    imgQueries:["dumbbell tricep kickback exercise","tricep kickback fitness","dumbbell kickback triceps"],
    steps:["Hinge at the hips until your torso is nearly parallel to the floor.","Hold a dumbbell in one hand, upper arm pinned against your side and parallel to the floor.","Keeping your upper arm completely still, extend your forearm back until your arm is straight.","Squeeze your tricep hard at full extension — hold for 1 second.","Slowly return to the start (90° elbow bend).","Complete all reps on one side before switching."],
    tips:"The upper arm must stay parallel to the ground and locked. Any movement kills the isolation. Use lighter weight and focus on the squeeze at full extension." },

  { id:"darnold", cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Arnold Press", muscles:"All 3 Deltoid Heads, Triceps", defSets:3, defReps:10,
    imgQueries:["dumbbell arnold press exercise","arnold press shoulders dumbbell","arnold dumbbell shoulder press"],
    steps:["Sit on a bench (back supported) or stand. Hold dumbbells in front of your shoulders, palms facing you (as if at the top of a curl).","As you press upward, rotate your palms outward so they face forward at the top.","Fully extend your arms at the top with palms facing away from you.","As you lower, reverse the rotation — palms return to face you at the bottom.","The rotation should be smooth and controlled throughout the full range."],
    tips:"Invented by Arnold Schwarzenegger, this press hits all three deltoid heads in one movement thanks to the rotation. Use slightly lighter weight than a standard press." },

  { id:"dpo",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Pullover", muscles:"Lats, Serratus Anterior, Lower Chest", defSets:3, defReps:12,
    imgQueries:["dumbbell pullover exercise chest","dumbbell pullover lats chest","straight arm dumbbell pullover"],
    steps:["Lie perpendicular across a bench so only your upper back is supported. Plant your feet flat on the floor.","Hold a single dumbbell with both hands directly above your chest, arms nearly straight (slight elbow bend).","Keeping arms straight, lower the dumbbell in an arc over and behind your head until you feel a deep lat and chest stretch.","Pause at the bottom — don't bounce — then pull the dumbbell back in the same arc to the starting position.","Breathe in as you lower, breathe out as you pull back."],
    tips:"One of the few exercises that works both the chest and lats simultaneously. Control the arc — never use momentum on the way down." },

  { id:"dstu", cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Step-Up", muscles:"Quads, Glutes, Hamstrings, Balance", defSets:3, defReps:10,
    imgQueries:["dumbbell step up exercise","step up dumbbell legs","box step up dumbbell fitness"],
    steps:["Stand in front of a sturdy box or bench (12–18 inches high), holding a dumbbell in each hand.","Place your right foot fully on top of the box — the entire foot, not just your toes.","Drive through your right heel to step up, bringing your left foot up beside it.","Stand tall at the top, then step back down with your left foot first, then right.","Complete all reps leading with the right leg, then switch legs.","Keep your torso upright — avoid leaning forward excessively."],
    tips:"Drive through the heel of the elevated foot, not the ball. Step-ups are highly effective for correcting left/right leg strength imbalances." },

  { id:"dht",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Hip Thrust", muscles:"Glutes, Hamstrings, Hip Extensors", defSets:3, defReps:15,
    imgQueries:["dumbbell hip thrust exercise","hip thrust dumbbell glutes","dumbbell glute bridge hip thrust"],
    steps:["Sit on the floor with your upper back against a bench. Place a dumbbell horizontally across your hip crease and hold it in place.","Plant your feet flat on the floor, hip-width apart, knees bent at ~90°.","Brace your core and drive your hips upward by squeezing your glutes.","At the top, your body forms a straight line from shoulders to knees.","Hold and squeeze your glutes hard for 1–2 seconds at the top.","Lower your hips slowly until they nearly touch the floor, then repeat."],
    tips:"Squeeze your glutes, not your lower back, at the top. If you feel it in your lower back, your feet are too far forward or your core isn't braced." },

  { id:"dfw",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Farmer's Walk", muscles:"Forearms, Traps, Core, Legs", defSets:3, defReps:40,
    imgQueries:["dumbbell farmer walk exercise","farmer's carry dumbbell fitness","farmer walk carry grip strength"],
    steps:["Pick up a heavy dumbbell in each hand using a firm grip. Stand tall.","Retract your shoulder blades slightly and engage your core tightly.","Walk forward with short, controlled steps at a normal pace.","Keep your gaze forward, chest up, and shoulders level — do not lean to one side.","Continue for the prescribed distance (20–40 metres) or time.","Set the dumbbells down by hinging at the hips with a neutral spine."],
    tips:"The farmer's walk is one of the most effective full-body exercises for grip, traps, core stability, and conditioning. Go heavier than feels comfortable." },

  { id:"dslu", cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Side Lunge", muscles:"Adductors, Glutes, Quads", defSets:3, defReps:10,
    imgQueries:["dumbbell side lunge exercise","lateral lunge dumbbell legs","dumbbell lateral lunge fitness"],
    steps:["Stand with feet together holding a dumbbell in each hand at your sides.","Take a large step to the right, landing with your right foot flat and toes slightly out.","Bend your right knee deeply, sitting your hips back as if into a single-leg squat. Left leg stays straight.","Keep the dumbbells on either side of your right foot for balance.","Drive off your right heel to return to standing.","Complete all reps on one side, then switch. Or alternate sides each rep."],
    tips:"The side lunge trains the adductors (inner thighs) and glutes in a lateral plane of motion that most exercises neglect. Great for hip mobility." },

  { id:"drr",  cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Renegade Row", muscles:"Lats, Core, Obliques, Triceps", defSets:3, defReps:8,
    imgQueries:["dumbbell renegade row exercise","renegade row plank dumbbell","plank row dumbbell core"],
    steps:["Start in a push-up position with each hand gripping a dumbbell on the floor, shoulder-width apart.","Your body should form a straight plank — squeeze your glutes and brace your core hard.","Without rotating your hips, row the right dumbbell up to your hip, elbow driving behind you.","Lower the right dumbbell back to the floor, then row the left.","One row on each side = 1 rep. Move deliberately — avoid twisting the hips.","The wider your feet, the more stable you'll be. Narrow feet = harder."],
    tips:"The renegade row is as much a core exercise as a back exercise. If your hips rotate, widen your stance or reduce weight." },

  { id:"dskull", cat:"dumbbells", catLabel:"Dumbbells", emoji:"🏋️", name:"Dumbbell Skull Crusher", muscles:"Triceps Brachii (all heads)", defSets:3, defReps:12,
    imgQueries:["dumbbell skull crusher exercise","lying tricep extension dumbbell","skull crusher triceps dumbbell"],
    steps:["Lie flat on a bench holding a dumbbell in each hand, arms fully extended above your chest, palms facing each other.","Keep your upper arms completely vertical and stationary throughout — only your forearms move.","Bend your elbows to lower the dumbbells toward the sides of your head (beside your temples).","Stop when your forearms are parallel to the floor or slightly past.","Extend your elbows back to the start by contracting your triceps forcefully.","Move slowly and with control — the name is a reminder to stay focused."],
    tips:"Keep your elbows pointing straight up — flaring them out turns this into a press. The most effective isolation exercise for all three tricep heads." },
];

/** Lookup by id */
export function exById(id) {
  return EXERCISES.find(e => e.id === id);
}

/** Category accent colours */
export const CAT_COLORS = {
  strength: '#7c6cff', cardio: '#ff6b6b', bw: '#ffd166',
  core: '#3dd68c', hiit: '#ff9b6b', flex: '#6bdfff', sport: '#ff6bd6', mind: '#b06bff',
  dumbbells: '#ffb347',
};

export const TIME_BASED_IDS = new Set(['run','cyc','row','swm','stm','jr','plk','dbr','cwi','med']);

export const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
export const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
