/**
 * This is just a basic implementation of hash function and hashtable for demo/educational purposes basically it tells how things work.
 * It's not the best solution in the world.
 * --- This only work for Strings. ---
 */

/**
 * Collisions can happen in this implementation to reduce that we have some options - 
 * 1) - Chaining (a.k.a Open Hashing)
 * 2) - Open Addressing (a.k.a Closed Hashing)
 *    a) - Linear Probing.
 *    b) - Quadratic Hashing.
 *    c) - Double Hashing.
 * 
 * For demonstration Chaining is used here.
 */


class HashTable {

    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        const PRIME = 31;
        let total = 0;
        let length = Math.min(key.length, 100);
        for (let i = 0; i < length; i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        const insidePos = this.keyMap[index];
        if (insidePos) {
            for (let i = 0; i < insidePos.length; i++) {
                if (insidePos[i][0] === key) {
                    return insidePos[i][1];
                }
            }
        }
        return undefined;
    }

    /* These method will return duplicate values if there is any*/

    keys() {
        const keysArr = [];
        const insidePos = this.keyMap;
        for (let i = 0; i < insidePos.length; i++) {
            if (insidePos[i]) {
                insidePos[i].map((value) => {
                    keysArr.push(value[0]);
                });
            }
        }
        return keysArr;
    }

    values() {
        const valuesArr = [];
        const insidePos = this.keyMap;
        for (let i = 0; i < insidePos.length; i++) {
            if (insidePos[i]) {
                insidePos[i].map((value) => {
                    valuesArr.push(value[1]);
                });
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.keys();
ht.values();
