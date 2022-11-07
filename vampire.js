class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires ++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    if (vampire === this) { 
      return this;
    }
    let youngestVamp = vampire;
    let oldestVamp = this;
    if (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal) { 
      youngestVamp = this;
      oldestVamp = vampire;
    }
    while (youngestVamp.creator) { 
      if (youngestVamp.creator === oldestVamp) { 
        return oldestVamp;
      } else if (youngestVamp.creator === oldestVamp.creator) { 
        return oldestVamp.creator;
      }
      youngestVamp = youngestVamp.creator;
    }
    return youngestVamp;
  }
    // Returns the vampire object with that name, or null if no vampire exists with that name
    vampireWithName(name) {
        for (const offspring of this.offspring){
          if (offspring.name === name) {
            return true;
          } else {
            return false;
          }
          offspring.vampireWithName;
        }
    }
  
    // Returns the total number of vampires that exist
    get totalDescendents() {
      let descendents = 0;
      for (const offspring of this.offspring) {
        descendents ++;
        offspring.totalDescendents;
      }
        return descendents;
    }
  
    // Returns an array of all the vampires that were converted after 1980
    get allMillennialVampires() {
    let allvampAfter1980 = [];
    for (const offspring of this.offspring) {
      if (this.yearConverted > 1980) {
        allvampAfter1980.push(this.name);
      }
        offspring.allMillennialVampires;
    }
    return allvampAfter1980;
    }
}
module.exports = Vampire;

