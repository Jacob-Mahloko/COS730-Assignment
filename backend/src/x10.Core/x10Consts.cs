using x10.Debugging;

namespace x10
{
    public class x10Consts
    {
        public const string LocalizationSourceName = "x10";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "88f07aeb83a84c29853192f946d3156c";
    }
}
