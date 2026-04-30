const Benchmark = {
    run: function() {
        var VAR_1 = "javascript:alert(1)sdodmowdadwdawdkmawpdmpoawmdwad";
        var VAR_2 = "javascrippt:alert(1)sdodmowdadwdawdkmawpdmpoawmdwad";
        var VAR_3 = [VAR_1, VAR_2];
        function FUNCTION_1(VAR_4) {
          return VAR_4.includes("javascript:");
        }
        for (var VAR_5 = 0; VAR_5 < 100000; VAR_5++) {
          FUNCTION_1(VAR_3[VAR_5 % 2]);
        }
    }
};