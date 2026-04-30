const Benchmark = {
    run: function() {
        for (let VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          let FUNCTION_1 = function time(VAR_7) {
            let VAR_6 = VAR_5 + "th timer";
            let VAR_8 = Date.now();
            let VAR_9;
            return {
              KEY_5() {
                if (!VAR_6 || VAR_6.length === 0) {
                  throw new Error("Please create a timer");
                }
                VAR_9 = Date.now() - this.VAR_8;
              },
              KEY_6() {
                if (!VAR_6 || VAR_6.length === 0) {
                  throw new Error("Please create a timer");
                }
                VAR_9 = Date.now() - this.VAR_8;
                VAR_6 = undefined;
              },
            };
          };
        }
    }
};