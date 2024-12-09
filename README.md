# EducatlyBlog

## File Structure

Here is the file structure of the application:

```plaintext
src/
├── app/
│   ├── pages/
│   │   └── blog-list/
│   │       ├── components/
│   │       │   └── blog-item/
│   │       │       ├── blog-item.component.html
│   │       │       ├── blog-item.component.scss
│   │       │       └── blog-item.component.ts
│   │       ├── blog-list.component.html
│   │       ├── blog-list.component.scss
│   │       └── blog-list.component.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── error-message/
│   │   │   │   ├── error-message.component.html
│   │   │   │   ├── error-message.component.scss
│   │   │   │   └── error-message.component.ts
│   │   │   └── loading-indicator/
│   │   │       ├── loading-indicator.component.html
│   │   │       ├── loading-indicator.component.scss
│   │   │       └── loading-indicator.component.ts
│   │   ├── constants/
│   │   │   └── api.constant.ts
│   │   ├── models/
│   │   │   └── blog.interface.ts
│   │   └── services/
│   │       └── blog.service.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   └── app.config.ts
```

### How to Run the Application

1. **Install Dependencies**:
   - Ensure that you have [Node.js](https://nodejs.org/) installed.
   - Run the following command to install the project dependencies:
     ```bash
     npm install
     ```

2. **Development Server**:
   - Start the development server by running:
     ```bash
     ng serve
     ```
   - The application will be available at `http://localhost:4200/`.

3. **Build for Production**:
   - To create a production build, run:
     ```bash
     ng build --prod
     ```

4. **Running Tests**:
   - To run unit tests, use:
     ```bash
     ng test
     ```

5. **Directory Description**:
   - **`pages/`**: Contains feature-specific modules and components.
   - **`shared/`**: Contains reusable components, constants, models, and services.
   - **`app.component.*`**: Root component of the application.

---
