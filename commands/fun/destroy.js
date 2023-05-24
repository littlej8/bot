const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('destroy')
        .setDescription('Destroys'),
    async execute(interaction) {
        await interaction.reply('Authorities have been informed that you have been producing drugs out of your basement and will be commencing a raid in approximately 4 hours. 😝');
    },
};