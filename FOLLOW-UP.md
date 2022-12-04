# Implementation:

### PRODUCTION VERSION

Deployed at: https://moonpay-tech-test-fe.vercel.app/

### Q) What libraries did you add to the frontend? What are they used for?

- React Query, a stale-while-revalidate library, used for consuming both REST and GraphQL APIs on client-side, in order to create
  a scalable application. For the purpose of this tech test only - certainly, this is an overkill, BUT the technical assignment has been whritten
  in a way to demonstrate the possible scale-up of the application.
- Material UI, Emotion CSS - components library and css-in-js styling system, provides a large set of UI components and styling api, that helps to
  faster create and scale-up the FE application.

### Q) What libraries did you add to the backend? What are they used for?

N/A ( I have been instructed to engage with the FE task only )

### Q) Any other comments we should read before evaluating your solution?

- each unit ( component, hook, util function ) has a jsDoc comment to it. Is is arguable wherer the jsDoc is needed while using the typescript,
  however, I would think that I may add the jsDoc comments - just to explain my motivation why do I have each of a given unit in place.
- the solution has been applied given a reasonable amount of time that can be alllocated to the candidate's technical assignment, by saying that
  I am implying that for a real task of a same comlexity, which is not much, but much likely it would have been allocated at least 3 scrum points and
  broken down to into several tickets. ( as you can currenly see - there is a number of tasks that still require here, including unit tests min coverage )

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

#### Before I scale-up any further, I would:

- Install and setup testing libraries ( just + RTL packages ), unit tests minumum coverage
- Install and setup pre-commit runner ( eg. husky )
- Enhance my current CI-CD ( which currently the only one part provided by Vercel), but I would like to add a PL by Guthub actions or Circle-CI or other of team choiice.

#### Then when I can add new code in +/- controlled manner, I would:

- refactor my current code ( for example: my custom hook's logic - smells, currently I find it does too many things, I would like to think how to shrink it down, or at List components, one or two are too large to fulfill their SRP and also I still drill some props - so need to review the architectural approach there & possibly something else. )
- made the existing code reviewed by team members (😃 who might be available please ), further improve it.
- QA the existing UI: what can be imporved or re-made ?

#### Then, possibly I would review my fetching strategy:

- client side: what do I fetch and when, what/when to cache/revalidate,
  because currenntly I fetch the whole list of 150+ items, which I believe can be even longer later as application grows.
- api-side: see what are the chances to fetch: the paginated list, sort and filter params, etc. ?
- api-side: see what are the chances to receive a list of currencies that have exactly same interface(data structure).

### Q) Which parts are you most proud of? And why?

- I have really enjoyed all parts of the task (😃 except maybe the writing this `FOLLOW-UP.md`). Why? - I generally love to write code.
- `"Which parts are you most proud of?"`😉 - it is tempting to feel proud about something just created, BUT - I would prefer to hold off myself from being proud yet - because it helps to keep an open mind and keep critical attitude that helps ( me at least ), to learn to write better code tomorrow comparing to my code today. Also, 🚀 the pride belongs rather to:
- the Facebook team ( React.js creators `https://reactjs.org/community/team.html`),
- Vercel Team (Next.js, `https://nextjs.org/conf`),
- Tanner Linsley ( Tanstack React Query `https://youtu.be/i7iqVsmcQyo`)

### Q) Which parts did you spend the most time with? What did you find most difficult?

- Most time spent on thinking of one way over the other, whether just get away with frontend SPA, component's local state and atomic css - which is
  100% valid solution, lean - nothing in excess. Then started to think about other solutions - how can I provide within a reasonable amount of time a robust, scalable, readable, maintainable, re-usable, task achieving solution. `What I can do?` AND `What I SHOULD NOT do?`. THIS part I have found the most difficult. The coding part was ok.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.

The test is good, the most important than the code itself - it MUST convey somehow the line of thoughts, the motivation of an engineer that wrote it.
This I believe is usually easier achieved by pair-coding session or just technical conversation. But as any point of view - it is subjective and I could be wrong here.
