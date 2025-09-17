import { friends, colleagues} from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends : Friend[]) {
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
function highestExtension(cs: Colleague[]): Colleague {
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
