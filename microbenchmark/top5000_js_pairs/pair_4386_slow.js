const Benchmark = {
    run: function() {
        var VAR_1 = new Intl.DateTimeFormat({
          KEY_1: "long",
          KEY_2: "numeric",
          KEY_3: "long",
          KEY_4: "numeric",
          KEY_5: "number",
          KEY_6: "number",
          KEY_7: "number",
        });
        VAR_1.format(new Date(Date.UTC(2012, 11, 20, 3, 0, 0)));
    }
};