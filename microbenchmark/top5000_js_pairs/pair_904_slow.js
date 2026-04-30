const Benchmark = {
    run: function() {
        class CLASS_1 {
          KEY_1(VAR_1) {
            this.VAR_2 = VAR_1 || 0;
          }
          KEY_2(VAR_3) {
            this.VAR_2 += VAR_3 || 0;
          }
          KEY_3() {
            return this.VAR_2;
          }
        }
        const VAR_4 = new CLASS_1(1000);
        let VAR_5 = 0;
        for (let VAR_6 = 0; VAR_6 < 100000; VAR_6++) {
          VAR_4.KEY_2(Math.random());
          VAR_5 = VAR_4.KEY_3();
        }
    }
};