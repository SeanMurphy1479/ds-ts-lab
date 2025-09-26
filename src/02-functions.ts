import { friends, colleagues} from './01-basics'
import {Friend, Colleague, EmailContact} from './myTypes'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]) {
    var results = [];
    for (var f of friends){
        f.age += 1;
        results.push(`${f.name} is now ${f.age}`)
    }
    return results;
}

console.log(older(friends[0]))
console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
    const highest = highestExtension(colleagues);
    const newExtension = highest.contact.extension + 1;

    const c: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: newExtension
        }
    };

    colleagues.push(c)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined){
    end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 3));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));

function findFriends(friends: Friend[], criterion: (f:Friend) => boolean){
    var results : string[] = []

    for (var i = 0; i < friends.length; i++){
        var f = friends[i]
        if (criterion(f)) {
            results.push(f.name)
        }
    }
    return results
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));

function addIntrests(friend: Friend, interest: string): string[]{
  if (!friend.intrests){
    friend.intrests = [];
  }
  friend.intrests.push(interest)
  return friend.intrests;
}

console.log(addIntrests(friends[0], 'Politics'))