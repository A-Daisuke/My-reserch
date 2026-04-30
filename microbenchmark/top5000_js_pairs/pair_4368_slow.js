const Benchmark = {
    run: function() {
        class CLASS_1 {
          KEY_1() {
            let VAR_1 = 2;
            return VAR_1;
          }
        }
        class CLASS_2 extends CLASS_1 {
          KEY_2() {
            let VAR_2 = 1;
          }
        }
        var VAR_3 = new CLASS_2();
        VAR_3.KEY_1();
    }
};