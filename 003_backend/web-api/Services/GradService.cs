using web_api.Models;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class GradService : IGradService
    {

        private WebAppContext _context;

        public GradService(WebAppContext context)
        {
            _context = context;
        }

        public ResponseModel DeleteGrad(Guid gradId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var grad = _context.Grads.FirstOrDefault(g => g.Id == gradId);
                
                if (grad != null)
                {
                    _context.Grads.Remove(grad);
                    _context.SaveChanges();

                    model.IsSuccess = true;
                    model.Message = "Grad removed successfully";
                }
                else
                {
                    model.IsSuccess = false;
                    model.Message = "Grad not found";
                }
            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            _context.SaveChanges();
            return model;
        }

        public List<Grad>? GetAllGrads()
        {
            return _context.Grads.ToList();
        }

        public Grad? GetGradById(Guid gradId)
        {
            return _context.Grads.SingleOrDefault(g => g.Id == gradId);
        }

        public ResponseModel SaveGrad(Grad gradModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var grad = _context.Grads.SingleOrDefault(g => g.Id == gradModel.Id);

                // Existiert die Grad('Note') schon? ===> update()
                if(grad != null)
                {
                    grad.Date = gradModel.Date;
                    grad.Weight = gradModel.Weight;
                    grad.Name = gradModel.Name;
                    grad.Points = gradModel.Points;

                    // Context-Update (Datenbanken werden aktualisiert mit neuen Werten)
                    _context.Update(grad);

                    // Responsemodel (Nutzer-Feedback) befüllen
                    model.IsSuccess = true;
                    model.Message = "Grad updated successfully";

                }
                // Existiert noch nicht? Neu anlegen mit übergebenen Model
                else
                {
                    // Datenbank-Eintrag anlegen
                    _context.Grads.Add(gradModel);

                    // Model vorbereiten
                    model.IsSuccess = true;
                    model.Message = "Grad saved successfully";
                }
            }
            // Fehler abfangen
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            _context.SaveChanges();
            return model;
        }
    }
}
