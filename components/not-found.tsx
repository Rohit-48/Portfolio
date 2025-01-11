import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto font-mono flex items-center justify-center">
      <Card className="bg-secondary/50">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            404 - Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Sorry, the page you are looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}

