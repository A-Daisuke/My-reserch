const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          VAR_2 = VAR_1.length;
        function FUNCTION_1() {
          this.VAR_3 = VAR_1;
          this.VAR_4 = VAR_2;
          this.VAR_5 = 0;
          this.FUNCTION_2 = function () {
            if (this.VAR_5 < this.VAR_4) return this.VAR_3[this.VAR_5++];
            else {
              this.VAR_5 = 0;
              return null;
            }
          };
        }
        var VAR_6 = new FUNCTION_1();
        for (var VAR_7; (VAR_7 = VAR_6.FUNCTION_2()); VAR_7 + 3735928559);
    }
};