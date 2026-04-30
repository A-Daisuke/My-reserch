const Benchmark = {
    run: function() {
        console.info.bind(console)(Math.random());
        console.log.bind(console)(Math.random());
        console.warn.bind(console)(Math.random());
        console.error.bind(console)(Math.random());
        console.trace.bind(console)();
    }
};