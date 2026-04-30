const Benchmark = {
    run: function() {
        class CLASS_1 {
          KEY_1() {}
          get KEY_2() {
            return 3;
          }
          set KEY_3(VAR_1) {
            return 3;
          }
        }
        let VAR_2 = new CLASS_1();
        let VAR_3 = { KEY_4: 3 };
        VAR_2.KEY_2 = 4;
        let VAR_4 = VAR_2.KEY_2;
    }
};