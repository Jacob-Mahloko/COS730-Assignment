using System.ComponentModel.DataAnnotations;

namespace x10.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}