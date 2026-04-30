const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          let VAR_1 = 0;
          this.FUNCTION_2 = () => {
            return ++VAR_1;
          };
        }
        const VAR_2 = new FUNCTION_1();
        let VAR_3 = 0;
        for (let VAR_4 = 0; VAR_4 < 1000000; VAR_4++) VAR_3 = (VAR_3 + VAR_2.FUNCTION_2()) | 0;
    }
};