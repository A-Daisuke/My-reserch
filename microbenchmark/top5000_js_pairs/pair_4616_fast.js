const Benchmark = {
    run: function() {
        function FUNCTION_1({ VAR_1, VAR_2, VAR_3, VAR_4, VAR_5 } = {}) {
          this.VAR_6 = VAR_1;
          this.VAR_7 = VAR_2;
          this.VAR_8 = VAR_3;
          this.VAR_9 = VAR_4;
          this.VAR_10 = false;
          this.VAR_11 = null;
          this.VAR_12 = null;
        }
        function FUNCTION_2(VAR_13) {
          FUNCTION_1.call(this, VAR_13);
          this.VAR_14 = VAR_13.VAR_14;
        }
        Object.setPrototypeOf(FUNCTION_2.prototype, FUNCTION_1.prototype);
    }
};