const Benchmark = {
    run: function() {
        const VAR_1 = ["retro", "meeting", "training", "holiday"];
        FUNCTION_1 = (VAR_2, VAR_3) =>
          VAR_2.localeCompare(VAR_3, "pl", {
            KEY_1: "base",
            KEY_2: true,
          });
        const VAR_4 = VAR_1.sort(FUNCTION_1);
    }
};