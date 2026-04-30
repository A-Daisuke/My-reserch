const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          const VAR_7 =
            /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[1-9][1-9]?)$/;
          return VAR_7.test(VAR_1);
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