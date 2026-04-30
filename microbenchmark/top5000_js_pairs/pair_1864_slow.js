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
        let VAR_3 = false;
        for (const VAR_4 of VAR_1) {
          if (VAR_4 === "nope") {
            VAR_3 = true;
            break;
          }
        }
    }
};