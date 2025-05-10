import Link from "next/link";

export default function MainBody() {
    return (
        <div className="p-10 md:p-0">
            <section id="about" className="bg-muted/50 py-12 md:py-16 flex items-center justify-center bg-gray-50 px-10 md:px-0">
                <div className="container">
                    <div className="mx-auto max-w-4xl space-y-6">
                    <div className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-10">About Breast Cancer Detection</div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Understanding the Metrics</h3>
                        <p>
                            <strong>Radius Mean:</strong> The average distance from the center to points on the perimeter of the
                            tumor.
                        </p>
                        <p>
                            <strong>Texture Mean:</strong> The standard deviation of gray-scale values in the tumor cells.
                        </p>
                        </div>
                        <div className="space-y-4">
                        <h3 className="text-xl font-semibold">How It Works</h3>
                        <p>
                            Our tool uses a simplified machine learning model trained on the Wisconsin Breast Cancer dataset to
                            provide a preliminary assessment based on tumor characteristics.
                        </p>
                        <p>
                            The model analyzes the input values and compares them to patterns found in known malignant and
                            benign tumors.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <section id="resources" className="py-12 md:py-16 flex items-center justify-center">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-10">Resources</div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="p-6 border border-gray-200 rounded-md items-center text-gray-500 font-medium">
                  <h3 className="text-xl font-bold text-black">Early Detection</h3>
                  <p className="mt-2 text-muted-foreground">

                    Learn about the importance of early detection and regular screenings.
                    
                  </p>
                  <Link href="#" >
                    <div className="mt-4 text-pink-500 text-sm font-semibold hover:underline underline-offset-4">
                        Learn More
                    </div>
                    
                  </Link>        
                </div>
              </div>
              <div>
                <div className="p-6 border border-gray-200 rounded-md items-center text-gray-500 font-medium">
                  <h3 className="text-xl font-bold text-black">Support Groups</h3>
                  <p className="mt-2 text-muted-foreground">
                    Connect with support groups and resources for patients and families.
                  </p>
                  <Link href="#" >
                    <div className="mt-4 text-pink-500 text-sm font-semibold hover:underline underline-offset-4">
                        Find support
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}