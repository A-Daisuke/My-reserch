const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          if (VAR_2 === 99999) {
            VAR_1.push("nope");
          } else {
            VAR_1.push("astring");
          }
        }
        let VAR_3 = VAR_1.includes("nope");
    }
};