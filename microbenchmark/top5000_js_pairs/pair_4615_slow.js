const Benchmark = {
    run: function() {
        const VAR_1 = new String("Today is a wonderful day");
        const VAR_2 = Object.values(VAR_1);
        const VAR_3 = VAR_2.reverse();
        const VAR_4 = VAR_3.join("");
        console.log(VAR_4);
    }
};