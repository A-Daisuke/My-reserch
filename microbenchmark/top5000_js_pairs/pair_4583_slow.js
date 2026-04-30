const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (!VAR_1) {
            return false;
          }
          const VAR_2 = VAR_1.split(".");
          const VAR_3 = VAR_2
            .filter((VAR_4) => !Number.isNaN(VAR_4))
            .filter((VAR_5) => Number(VAR_5) < 256)
            .filter((VAR_6) => VAR_6 === Number(VAR_6).toString());
          return VAR_3.length === 4;
        }
        FUNCTION_1("127.0.0.1");
        FUNCTION_1("255.255.255.255");
        FUNCTION_1("10.10.0.1");
        FUNCTION_1("10.10.0");
        FUNCTION_1("325.10.0.0");
        FUNCTION_1("abc");
        FUNCTION_1(undefined);
    }
};