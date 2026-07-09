import os
import sys

try:
    from weasyprint import HTML
except ImportError:
    print("Error: The 'weasyprint' library is not installed.")
    print("Please install it by running: pip install weasyprint")
    sys.exit(1)

def compile_capability_statement(input_html, output_pdf):
    """
    Compiles the custom HTML Capability Statement into an A4 PDF.
    Ensures that paths are valid before running the compiler.
    """
    if not os.path.exists(input_html):
        print(f"Error: Input file '{input_html}' not found in this directory.")
        return False
    
    print(f"Compiling '{input_html}' to '{output_pdf}'...")
    
    try:
        # WeasyPrint parses the HTML and CSS Paged Media rules to build a pixel-perfect PDF
        HTML(input_html).write_pdf(output_pdf)
        print("Success! PDF generated successfully.")
        print(f"Output saved to: {os.path.abspath(output_pdf)}")
        return True
    except Exception as e:
        print(f"Compilation failed due to an unexpected error: {e}")
        return False

if __name__ == "__main__":
    # Define file paths matching our workspace
    source_html = "capability_statement.html"
    target_pdf = "capability_statement.pdf"
    
    compile_capability_statement(source_html, target_pdf)
