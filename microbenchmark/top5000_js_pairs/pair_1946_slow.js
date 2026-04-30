const Benchmark = {
    run: function() {
        class CLASS_1 {
          KEY_1(VAR_1) {
            this.VAR_2 = VAR_1;
            this.VAR_3 = Date.now();
          }
          KEY_2() {
            this.VAR_3 = Date.now();
          }
          KEY_3() {
            if (!this.VAR_2 || this.VAR_2.length === 0) {
              throw new Error("Please create a timer");
            }
            this.VAR_4 = Date.now() - this.VAR_3;
          }
          KEY_4() {
            this.KEY_3();
            this.VAR_2 = undefined;
          }
        }
        for (let VAR_5 = 0; VAR_5 < 10000; VAR_5++) {
          let VAR_6 = new CLASS_1(VAR_5 + "th timer");
        }
    }
};