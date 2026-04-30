const Benchmark = {
    run: function() {
        var VAR_1 = new Date();
        var VAR_2 = "en-us";
        var VAR_3 = {
          KEY_1: "UTC",
          KEY_2: "numeric",
          KEY_3: "2-digit",
          KEY_4: "2-digit",
        };
        VAR_1.toLocaleDateString(VAR_2, VAR_3);
    }
};