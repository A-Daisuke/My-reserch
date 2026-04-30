const Benchmark = {
    run: function() {
        new Intl.DateTimeFormat({
          KEY_1: "long",
          KEY_2: "numeric",
          KEY_3: "long",
          KEY_4: "numeric",
          KEY_5: "number",
          KEY_6: "number",
          KEY_7: "number",
        });
    }
};